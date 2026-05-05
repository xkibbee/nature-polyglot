// Google Gemini API Integration for Nature Polyglot

class GeminiAPI {
    constructor() {
        // Hardcoded API key for immediate use
        this.apiKey = 'AIzaSyBMo4rbVd13qiOtflqZTolpfUlOFfKQMGY';
        // Using gemini-2.5-flash model (latest version from Google AI Studio)
        this.apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
        
        // Auto-save the key to localStorage for consistency
        if (this.apiKey) {
            localStorage.setItem('gemini_api_key', this.apiKey);
        }
    }

    // Set API key
    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('gemini_api_key', key);
    }

    // Get API key from storage
    getApiKey() {
        if (!this.apiKey) {
            this.apiKey = localStorage.getItem('gemini_api_key') || 'AIzaSyBMo4rbVd13qiOtflqZTolpfUlOFfKQMGY';
        }
        return this.apiKey;
    }

    // Check if API key is set
    hasApiKey() {
        return !!this.getApiKey();
    }

    // Clear API key
    clearApiKey() {
        this.apiKey = null;
        localStorage.removeItem('gemini_api_key');
    }

    // Main method to find species names
    async findSpeciesNames(inputName, inputLanguage) {
        if (!this.hasApiKey()) {
            throw new Error('API key not set');
        }

        const prompt = this.buildPrompt(inputName, inputLanguage);
        
        try {
            const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.2,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'API request failed');
            }

            const data = await response.json();
            return this.parseResponse(data);
        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    }

    // Build the prompt for Gemini
    buildPrompt(inputName, inputLanguage) {
        const languageMap = {
            'latin': 'Latin (scientific name)',
            'italian': 'Italian',
            'english': 'English',
            'french': 'French'
        };

        return `You are a botanical and zoological expert with extensive knowledge of plant, animal, bird, insect, and fungi names across languages.

A user has provided the name "${inputName}" in ${languageMap[inputLanguage]}.

Your task:
1. Identify the specific species (plant, animal, bird, insect, or fungi)
2. Provide the names in ALL FOUR languages:
   - Latin: Scientific binomial nomenclature (genus species)
   - Italian: Common name used by Italian speakers
   - English: Common name used by English speakers
   - French: Common name used by French speakers

IMPORTANT RULES:
- Provide ACTUAL common names used by native speakers, NOT literal translations
- If multiple species match, choose the most common/well-known one
- If the input is ambiguous, make your best educated guess
- Return ONLY the four names, one per line, in this exact format:

LATIN: [scientific name]
ITALIAN: [Italian common name]
ENGLISH: [English common name]
FRENCH: [French common name]

Do NOT include any additional explanation, notes, or alternatives. Just the four names in the format above.`;
    }

    // Parse the API response
    parseResponse(data) {
        try {
            const text = data.candidates[0].content.parts[0].text;
            const lines = text.trim().split('\n');
            
            const result = {
                latin: '',
                italian: '',
                english: '',
                french: ''
            };

            lines.forEach(line => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('LATIN:')) {
                    result.latin = trimmedLine.replace('LATIN:', '').trim();
                } else if (trimmedLine.startsWith('ITALIAN:')) {
                    result.italian = trimmedLine.replace('ITALIAN:', '').trim();
                } else if (trimmedLine.startsWith('ENGLISH:')) {
                    result.english = trimmedLine.replace('ENGLISH:', '').trim();
                } else if (trimmedLine.startsWith('FRENCH:')) {
                    result.french = trimmedLine.replace('FRENCH:', '').trim();
                }
            });

            // Validate that we got all four names
            if (!result.latin || !result.italian || !result.english || !result.french) {
                throw new Error('Incomplete response from API');
            }

            return result;
        } catch (error) {
            console.error('Parse Error:', error);
            throw new Error('Failed to parse API response');
        }
    }
}

// Export for use in app.js
const geminiAPI = new GeminiAPI();