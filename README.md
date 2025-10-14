# Moon Tide Springs Landing Page

A single-page immersive landing page with animated card transitions and video background.

## Setup Instructions

### 1. Add Your Video
Place your Maine drone footage video file in the `assets` folder and name it `maine-drone-footage.mp4`

**Video Recommendations:**
- Format: MP4 (H.264 codec for best browser compatibility)
- Resolution: 1920x1080 or higher
- File size: Under 20MB if possible (compress for web)
- Duration: 20-60 seconds (it will loop)

### 2. Customize Contact Email
Edit `index.html` line 27 and replace `contact@moontidesprings.com` with your actual email address:
```html
<a href="mailto:your-email@example.com" class="contact-button">
```

### 3. Test Locally
Simply open `index.html` in your browser to preview the site.

### 4. Deploy to Render

#### Option A: Static Site (Recommended)
1. Create a new **Static Site** on Render
2. Connect your GitHub repository or upload files directly
3. Set publish directory to `.` (current directory)
4. Deploy!

#### Option B: Manual Upload
1. Zip the entire project folder
2. Upload to Render as a static site
3. No build command needed

## Project Structure
```
Moon Tide Springs Website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Animation sequencing
├── assets/
│   └── maine-drone-footage.mp4  # Your video file (add this)
└── README.md           # This file
```

## Customization Options

### Change Colors
Edit `styles.css` - main color variables:
- `.brand-name` color: `#1a4d2e` (dark green)
- `.tagline` color: `#4a7c59` (medium green)
- `.contact-button` background: `linear-gradient(135deg, #2d5a3d 0%, #1a4d2e 100%)`

### Adjust Animation Timing
Edit `script.js`:
- Brand card appears after: `800ms`
- Contact card appears after: `2200ms`

### Modify Text
Edit `index.html`:
- Business name (line 21)
- Tagline (line 22)
- Button text (line 28)

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support (video autoplay may be limited)

## Performance Notes
- Video should be compressed for web (use HandBrake or similar)
- Fallback gradient will show if video fails to load
- Mobile devices may not autoplay video due to browser restrictions
