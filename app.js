// Nature Polyglot - Main Application Logic

// DOM Elements
const apiSetup = document.getElementById('api-setup');
const appInterface = document.getElementById('app-interface');
const apiKeyInput = document.getElementById('api-key-input');
const saveApiKeyBtn = document.getElementById('save-api-key');

const translationForm = document.getElementById('translation-form');
const latinInput = document.getElementById('latin-input');
const italianInput = document.getElementById('italian-input');
const englishInput = document.getElementById('english-input');
const frenchInput = document.getElementById('french-input');
const searchBtn = document.getElementById('search-btn');
const resetBtn = document.getElementById('reset-btn');

const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeModalBtn = document.getElementById('close-modal');
const newApiKeyInput = document.getElementById('new-api-key');
const updateApiKeyBtn = document.getElementById('update-api-key');

// Input fields array
const inputFields = {
    latin: latinInput,
    italian: italianInput,
    english: englishInput,
    french: frenchInput
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

// Initialize the app
function initializeApp() {
    // API key is hardcoded, so always show the app interface
    showAppInterface();
    loadHistory();
}

// Show API setup screen
function showApiSetup() {
    apiSetup.classList.remove('hidden');
    appInterface.classList.add('hidden');
}

// Show main app interface
function showAppInterface() {
    apiSetup.classList.add('hidden');
    appInterface.classList.remove('hidden');
}

// Setup event listeners
function setupEventListeners() {
    // Save API key
    saveApiKeyBtn.addEventListener('click', handleSaveApiKey);
    apiKeyInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSaveApiKey();
    });

    // Form submission
    translationForm.addEventListener('submit', handleSearch);
    
    // Reset button
    resetBtn.addEventListener('click', handleReset);

    // Settings
    settingsBtn.addEventListener('click', openSettings);
    closeModalBtn.addEventListener('click', closeSettings);
    updateApiKeyBtn.addEventListener('click', handleUpdateApiKey);
    
    // Click outside modal to close
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeSettings();
    });

    // Clear history
    clearHistoryBtn.addEventListener('click', handleClearHistory);

    // Input field tracking
    Object.values(inputFields).forEach(input => {
        input.addEventListener('input', updateInputStyles);
    });
}

// Handle API key save
function handleSaveApiKey() {
    const key = apiKeyInput.value.trim();
    if (!key) {
        showError('Please enter an API key');
        return;
    }

    geminiAPI.setApiKey(key);
    showAppInterface();
    apiKeyInput.value = '';
    showSuccess('API key saved successfully!');
}

// Handle search
async function handleSearch(e) {
    e.preventDefault();
    
    // Find which input has content
    const inputData = getInputData();
    if (!inputData) {
        showError('Please enter a name in one of the fields');
        return;
    }

    // Show loading
    showLoading(true);
    hideError();

    try {
        // Call Gemini API
        const results = await geminiAPI.findSpeciesNames(inputData.value, inputData.language);
        
        // Fill in all fields
        fillResults(results);
        
        // Save to history
        saveToHistory(results);
        
        // Show success message
        showSuccess('Names found successfully!');
        
    } catch (error) {
        showError(error.message || 'Failed to find species names. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Get input data (which field has content)
function getInputData() {
    for (const [language, input] of Object.entries(inputFields)) {
        const value = input.value.trim();
        if (value) {
            return { language, value };
        }
    }
    return null;
}

// Fill results in all input fields
function fillResults(results) {
    latinInput.value = results.latin;
    italianInput.value = results.italian;
    englishInput.value = results.english;
    frenchInput.value = results.french;
    
    updateInputStyles();
}

// Handle reset
function handleReset() {
    translationForm.reset();
    hideError();
    updateInputStyles();
}

// Update input field styles
function updateInputStyles() {
    Object.values(inputFields).forEach(input => {
        if (input.value.trim()) {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
}

// Show/hide loading
function showLoading(show) {
    if (show) {
        loading.classList.remove('hidden');
        searchBtn.disabled = true;
    } else {
        loading.classList.add('hidden');
        searchBtn.disabled = false;
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        hideError();
    }, 5000);
}

// Hide error message
function hideError() {
    errorMessage.classList.add('hidden');
}

// Show success message
function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.background = '#f0fdf4';
    errorMessage.style.borderColor = '#86efac';
    errorMessage.style.color = '#166534';
    errorMessage.classList.remove('hidden');
    
    setTimeout(() => {
        hideError();
        errorMessage.style.background = '';
        errorMessage.style.borderColor = '';
        errorMessage.style.color = '';
    }, 3000);
}

// Save to history
function saveToHistory(results) {
    let history = JSON.parse(localStorage.getItem('search_history') || '[]');
    
    const entry = {
        ...results,
        timestamp: new Date().toISOString()
    };
    
    // Add to beginning of array
    history.unshift(entry);
    
    // Keep only last 10 searches
    history = history.slice(0, 10);
    
    localStorage.setItem('search_history', JSON.stringify(history));
    loadHistory();
}

// Load and display history
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('search_history') || '[]');
    
    if (history.length === 0) {
        historySection.classList.add('hidden');
        return;
    }
    
    historySection.classList.remove('hidden');
    historyList.innerHTML = '';
    
    history.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <strong>${entry.english || entry.italian || entry.french}</strong>
            <small>${entry.latin}</small>
        `;
        
        item.addEventListener('click', () => {
            fillResults(entry);
        });
        
        historyList.appendChild(item);
    });
}

// Clear history
function handleClearHistory() {
    if (confirm('Clear all search history?')) {
        localStorage.removeItem('search_history');
        loadHistory();
        showSuccess('History cleared');
    }
}

// Open settings modal
function openSettings() {
    settingsModal.classList.remove('hidden');
}

// Close settings modal
function closeSettings() {
    settingsModal.classList.add('hidden');
    newApiKeyInput.value = '';
}

// Update API key
function handleUpdateApiKey() {
    const newKey = newApiKeyInput.value.trim();
    if (!newKey) {
        alert('Please enter a new API key');
        return;
    }
    
    geminiAPI.setApiKey(newKey);
    closeSettings();
    showSuccess('API key updated successfully!');
}