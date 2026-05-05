# 🌿 Nature Polyglot - Complete Setup Guide

This guide will walk you through setting up Nature Polyglot step-by-step.

## Step 1: Get Your Free Google Gemini API Key

### Why Do I Need This?

Nature Polyglot uses Google's Gemini AI to accurately identify species and find their names across languages. You need your own free API key to use the service.

### How to Get Your API Key (5 minutes)

1. **Visit Google AI Studio**
   - Go to: https://ai.google.dev/
   - Click the "Get API Key in Google AI Studio" button

2. **Sign In**
   - Use your Google account (Gmail)
   - Accept the terms of service if prompted

3. **Create API Key**
   - Click "Get API Key" or "Create API Key"
   - Select "Create API key in new project" (recommended)
   - Your key will be generated instantly

4. **Copy Your Key**
   - Click the copy icon next to your new API key
   - Save it somewhere temporarily (you'll enter it in the app)

### ✅ Important Notes

- The API key is **FREE** to get
- You get **1,500 requests per day** for free
- No credit card required to start
- Keep your API key private (don't share it publicly)

---

## Step 2: Set Up the App

### Option A: Open Locally

1. **Download or Extract** the nature-polyglot folder to your computer

2. **Open index.html**
   - Double-click `index.html` to open in your browser
   - OR right-click → Open With → Your preferred browser

3. **Enter Your API Key**
   - When the app opens, you'll see the setup screen
   - Paste your Google Gemini API key
   - Click "Save & Continue"
   - Done! Start searching! 🎉

### Option B: Host on a Web Server

If you want to access the app from multiple devices:

1. **Upload to a web host** (GitHub Pages, Netlify, Vercel, etc.)
2. **Access via URL** on any device
3. **Enter your API key** on first use

---

## Step 3: Install on Mobile (Optional but Recommended!)

### iPhone / iPad

1. **Open in Safari**
   - Type the URL or open the local file
   - **Important**: Must use Safari, not Chrome

2. **Tap the Share Button**
   - It's the square with an arrow pointing up
   - Located at the bottom of the screen

3. **Add to Home Screen**
   - Scroll down and tap "Add to Home Screen"
   - Edit the name if desired
   - Tap "Add" in the top right

4. **Launch the App**
   - Find the Nature Polyglot icon on your home screen
   - Tap to open - it works like a native app!

### Android

1. **Open in Chrome**
   - Chrome browser recommended for best experience

2. **Open Menu**
   - Tap the three dots (⋮) in the top right

3. **Add to Home Screen**
   - Select "Add to Home screen" or "Install app"
   - Tap "Add" to confirm

4. **Launch the App**
   - Find the icon on your home screen
   - Tap to open!

---

## Step 4: Using the App

### Basic Usage

1. **Enter a Name**
   - Type any plant/animal name in ONE of the four boxes
   - Example: "Robin" in the English box

2. **Click Search** 🔍
   - The AI will identify the species
   - All four names will appear automatically

3. **View Results**
   - Latin: Scientific binomial name
   - Italian: Italian common name
   - English: English common name
   - French: French common name

4. **Reset**
   - Click Reset 🔄 to clear and start a new search

### Advanced Features

**Search History**
- Recent searches appear below the form
- Click any history item to reload those results

**Settings**
- Click the gear icon ⚙️ at the bottom
- Update your API key if needed

**Offline Mode**
- After first use, the app works offline for cached searches
- New searches require internet connection

---

## Step 5: Generate Icons (For Developers)

If you want to customize the app icons:

1. Open `create-icons.html` in your browser
2. Icons are generated automatically
3. Click download buttons to save them
4. Place them in the `icons/` folder

---

## Troubleshooting

### App shows "API key not set"

**Solution:** 
- Click the settings button (⚙️)
- Re-enter your API key
- Make sure there are no extra spaces

### "API request failed" error

**Possible causes:**
1. No internet connection - Check your WiFi/data
2. Invalid API key - Verify it's correct
3. Exceeded free tier - Check usage at https://console.cloud.google.com

### App won't install on iPhone

**Solution:**
- Must use Safari browser (not Chrome)
- Make sure you're tapping "Add to Home Screen" not "Bookmark"
- Try restarting Safari and trying again

### Icons not showing after install

**Solution:**
1. Open `create-icons.html` to generate icons
2. Download all three icon files
3. Create `icons/` folder in the app directory
4. Save icons as: `icon-192.png`, `icon-512.png`, `icon-maskable.png`
5. Reinstall the app

### Search results are inaccurate

**Tips for better results:**
- Be as specific as possible (e.g., "European Robin" vs just "Robin")
- Use scientific names when known
- For plants, include type (tree, flower, herb)
- The AI learns from context - try rephrasing

---

## FAQ

**Q: Is my API key safe?**
A: Yes! It's stored only in your browser's local storage, never sent anywhere except to Google Gemini API.

**Q: Can I use this offline?**
A: Partially. The app interface works offline, and cached searches are accessible. New searches require internet.

**Q: How many searches can I do?**
A: 1,500 per day for free with Google Gemini API.

**Q: Will it work on my tablet?**
A: Yes! Works on iPad, Android tablets, and all modern devices.

**Q: Can I share my searches?**
A: Currently no, but you can copy the text from any field.

**Q: Is there a limit on search history?**
A: The app stores your last 10 searches locally.

---

## Tips for Best Experience

1. 🔖 **Install to home screen** for the best mobile experience
2. 🌐 **Try different languages** - enter names in any of the four languages
3. 📝 **Use the history** - quickly access recent searches
4. 🔍 **Be specific** - include species type for better accuracy
5. 💡 **Start with common species** - easier for the AI to identify

---

## Next Steps

1. ✅ Get your API key
2. ✅ Open the app
3. ✅ Install on mobile
4. 🌿 Start exploring nature across languages!

---

**Questions or Issues?**

Check the README.md file for additional information and troubleshooting tips.

**Happy exploring! 🌿🦜🌍**