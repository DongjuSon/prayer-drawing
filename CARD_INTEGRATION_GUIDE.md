# Prayer Card Integration Guide

## What Was Done

Successfully integrated the 24 generated prayer card images into your index.html application.

### Changes Made

1. **Generated 24 Prayer Cards**
   - Created `/output_cards/` with all 24 PNG cards
   - Copied to `/images/cards/` for web access

2. **Updated script.js**
   - Added `cardImage` property to all 24 prayer cards
   - Modified `displayResult()` function to show pre-generated card images
   - Simplified `downloadImage()` function to directly download card images

3. **File Structure**
   ```
   prayer-drawing/
   ├── index.html           # Your main HTML file (no changes needed)
   ├── script.js            # Updated with cardImage support
   ├── styles.css           # No changes needed
   ├── images/
   │   └── cards/           # NEW: 24 generated prayer cards
   │       ├── IMG_0080.png
   │       ├── IMG_0081.png
   │       ├── IMG_0082.png
   │       ├── IMG_0083.png
   │       ├── IMG_0084.png
   │       ├── IMG_0085.png
   │       ├── IMG_0086.png
   │       ├── IMG_0087.png
   │       ├── IMG_0088.png
   │       ├── IMG_0089.png
   │       ├── IMG_0090.png
   │       ├── IMG_0091.png
   │       ├── IMG_0092.png
   │       ├── IMG_0093.png
   │       ├── IMG_0094.png
   │       ├── IMG_0095.png
   │       ├── IMG_0096.png
   │       ├── IMG_0097.png
   │       ├── IMG_0098.png
   │       ├── IMG_0099.png
   │       ├── IMG_0100.png
   │       ├── IMG_0101.png
   │       ├── IMG_0102.png
   │       └── IMG_0103.png
   └── output_cards/         # Original generated cards (backup)
   ```

## How to Use

### Option 1: Open Locally
Simply open `index.html` in a web browser:
```bash
open index.html
```

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues:

**Python 3:**
```bash
python3 -m http.server 8000
```
Then visit: http://localhost:8000

**Node.js (if you have http-server):**
```bash
npx http-server -p 8000
```
Then visit: http://localhost:8000

### Option 3: Deploy to GitHub Pages
1. Commit and push all changes to GitHub
2. Go to repository Settings → Pages
3. Select branch `main` and `/root` directory
4. Click Save
5. Your site will be available at: `https://dongjuson.github.io/prayer-drawing/`

## How It Works

1. **User clicks "기도제목 뽑기" button**
2. **Loading animation plays** (2 seconds)
3. **Random card is selected** from 24 options
4. **Generated card image is displayed** (not dynamically built)
5. **User can download the card** by clicking "이미지 저장하기"

## Features

✅ Random prayer card selection (24 unique cards)
✅ Beautiful pre-generated card images following Main_reference.png design
✅ Background images specific to each country
✅ Theme verse displayed as image (not text)
✅ Download functionality for sharing
✅ Responsive design
✅ Smooth animations

## Testing Checklist

- [ ] Open index.html in browser
- [ ] Click "기도제목 뽑기" button
- [ ] Verify loading animation appears
- [ ] Verify a prayer card image is displayed
- [ ] Click the download button
- [ ] Verify the card downloads successfully
- [ ] Press SPACE or ENTER to draw another card
- [ ] Verify you get different cards on multiple draws

## Troubleshooting

### Images not loading?
- Make sure `/images/cards/` directory exists
- Check that all 24 PNG files are in the directory
- Use a local server (Option 2 above) instead of opening directly

### Download not working?
- Check browser console for errors
- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Try using a local server

## Next Steps for GitHub Deployment

To deploy your updated application to GitHub:

```bash
# Add the new card images
git add images/cards/

# Add the updated script.js
git add script.js

# Commit the changes
git commit -m "Add generated prayer cards and update display logic

- Generated 24 prayer cards following Main_reference.png design
- Updated script.js to display pre-generated card images
- Added cardImage property to all prayer cards
- Simplified download functionality"

# Push to GitHub
git push origin main
```

## Notes

- Original card data (country, topic, prayer text) is still in script.js for reference
- The `generate_cards.py` script can regenerate cards if needed
- Cards are 606×1315 pixels (portrait orientation)
- All cards follow the Main_reference.png design standard

—

**Generated:** 2026-04-16
**Project:** His Plan - Prayer Drawing App
