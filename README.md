# 🌿 Nature Polyglot

**Find plant and animal names across languages instantly!**

Nature Polyglot is a Progressive Web App (PWA) that helps you discover the names of plants, animals, birds, insects, and fungi in four languages: Latin (scientific), Italian, English, and French.

## ✨ Features

- 🔤 **4-Language Translation**: Enter a name in any language, get names in all four
- 🤖 **AI-Powered**: Uses Google Gemini AI for accurate species identification
- 📱 **Mobile-First**: Works beautifully on iPhone and Android
- 🏠 **Installable**: Add to your home screen like a native app
- 📚 **Search History**: Quick access to recent searches
- 🌐 **Offline Support**: Works without internet for cached searches
- 🆓 **Free to Use**: 1,500 requests per day with free Google Gemini API

## 🚀 Getting Started

### 1. Get Your Free Google Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Click "Get API Key"
3. Sign in with your Google account
4. Create a new API key (takes 30 seconds)
5. Copy the API key

### 2. Setup the App

1. Open `index.html` in your browser
2. Enter your Google Gemini API key when prompted
3. Click "Save & Continue"
4. Start searching!

### 3. Install on Mobile

**iPhone:**
1. Open in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Tap "Add"

**Android:**
1. Open in Chrome
2. Tap the menu (⋮)
3. Select "Add to Home screen"
4. Tap "Add"

## 📖 How to Use

1. **Enter a name** in any of the four boxes:
   - Latin (Scientific name)
   - Italian
   - English
   - French

2. **Click Search** 🔍

3. The app will find and fill in the names in all four languages!

4. **Click Reset** 🔄 to start a new search

### Examples to Try

- English: "Robin"
- French: "Marguerite"
- Italian: "Quercia"
- Latin: "Felis catus"

## 🛠️ Technical Details

### Built With

- **HTML5, CSS3, JavaScript** - Core technologies
- **Google Gemini AI** - Language model for species identification
- **PWA Technologies** - Service Worker, Web Manifest
- **Local Storage** - For API key and search history

### File Structure

```
nature-polyglot/
├── index.html           # Main app page
├── styles.css          # Styling
├── app.js              # Application logic
├── gemini-api.js       # API integration
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline support
├── create-icons.html   # Icon generator
├── icons/              # App icons
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-maskable.png
└── README.md           # This file
```

## 🔐 Privacy & Security

- Your API key is stored locally in your browser only
- No data is sent to any server except Google Gemini API
- Search history is stored locally on your device
- The app works entirely client-side

## 🆓 API Costs

Google Gemini API offers a generous free tier:
- **1,500 requests per day FREE**
- No credit card required to start
- Perfect for personal use

Typical usage costs after free tier (if exceeded):
- ~$0.001 per search
- Most users will never exceed the free tier!

## 📱 Browser Compatibility

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)

## 🐛 Troubleshooting

**"API key not set" error:**
- Click the settings button (⚙️) to re-enter your API key

**"API request failed" error:**
- Check your internet connection
- Verify your API key is correct
- Ensure you haven't exceeded the free tier limit

**App not installing on iPhone:**
- Make sure you're using Safari (not Chrome)
- Follow the install steps exactly

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📧 Support

For issues or questions, please check the troubleshooting section above.

---

**Made with 🌿 for nature enthusiasts around the world!**