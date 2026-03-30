# Prayer Topic Drawing Website

A beautiful, interactive web application that helps users draw random prayer topics paired with missionary target countries. Each prayer topic features a Bible verse and provides specific prayer points for the assigned country.

## Features

- **Random Prayer Topic Drawing**: Click to randomly draw a Bible verse about prayer and missions
- **Missionary Country Mapping**: Each prayer topic is paired with a specific country that needs missionary work
- **Beautiful Animations**: Smooth transitions and card-shuffling animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **20+ Countries**: Includes unreached and restricted-access nations with specific prayer points

## How to Use

1. Open `index.html` in any modern web browser
2. Click the "Draw Prayer Topic" button
3. Wait for the drawing animation
4. Read the Bible verse and learn about your assigned missionary country
5. Pray through the provided prayer points
6. Click "Draw Again" to get a new prayer topic and country

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality and prayer data

## Countries Included

The application includes 20 missionary target countries:

- Afghanistan
- North Korea
- Yemen
- Somalia
- Iran
- Saudi Arabia
- Libya
- Algeria
- Maldives
- Turkmenistan
- Mauritania
- Bhutan
- Laos
- Morocco
- Comoros
- Mali
- Uzbekistan
- Brunei
- Pakistan
- Eritrea

## Customization

You can easily customize the prayer topics and countries by editing the `prayerTopics` array in `script.js`. Each entry includes:

```javascript
{
    verse: "Bible verse text",
    reference: "Book Chapter:Verse",
    country: {
        name: "Country Name",
        flag: "🇺🇳",
        description: "Brief description",
        prayerPoints: [
            "Prayer point 1",
            "Prayer point 2",
            // ...
        ]
    }
}
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Deployment

To deploy this website:

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Import the folder as a new project
4. **Any Web Host**: Upload all three files to your web hosting service

## License

Free to use for personal and ministry purposes.
