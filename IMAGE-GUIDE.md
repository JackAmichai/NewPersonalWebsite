# 📸 Image Placement Guide for Jack Amichai Portfolio

## Required Images

This guide shows you exactly where to place your photos in the portfolio.

---

## 🎯 Critical Images (Must Have)

### 1. Hero Photo (`images/hero-photo.jpg`)
- **Location**: Hero module (top-left large section)
- **Recommended Size**: 1920x1280px (landscape)
- **File Size**: < 200KB
- **What to Use**: Professional headshot or environmental portrait
- **Your Options**:
  - Use one of your existing professional photos
  - A photo showing you in a work environment
  - A portrait with clean background
  - Could be from LinkedIn if high quality

**Optimization Command**:
```bash
magick convert your-photo.jpg -quality 85 -resize 1920x1280^ -gravity center -extent 1920x1280 images/hero-photo.jpg
```

---

### 2. NVIDIA Project Screenshot (`images/nvidia-project.jpg`)
- **Location**: Featured Work module (wide center section)
- **Recommended Size**: 1600x1200px
- **File Size**: < 150KB
- **What to Use**: 
  - Screenshot of NVIDIA Doc Navigator interface
  - Mockup of the AI assistant in action
  - NVIDIA branding with project visualization
  - Code editor screenshot with relevant code

**If you don't have a screenshot yet**:
- Create a simple mockup using Figma/Canva
- Use a code editor screenshot with NVIDIA docs
- Use a conceptual image representing AI/documentation
- Placeholder: Dark interface with NVIDIA logo

---

### 3. Books & Violin Photo (`images/books-violin.jpg`)
- **Location**: Personality module (smaller square section)
- **Recommended Size**: 800x800px (square)
- **File Size**: < 100KB
- **What to Use**:
  - Photo of your actual books (Kafka, Barthes, etc.)
  - Your violin or sheet music
  - Bookshelf arrangement
  - Reading nook/study area

**Quick Create Option**:
- Take a photo of your current book
- Arrange books aesthetically on a surface
- Include violin in frame if available
- Use natural lighting

---

## 🏢 Company Logos (SVG Preferred)

### 4. Deloitte Logo (`images/deloitte-logo.svg`)
- **Format**: SVG or PNG with transparency
- **Size**: 200x60px
- **Source**: 
  - Download from Deloitte brand center
  - Or use: https://logosarchive.com/deloitte-logo/
  - Convert to single-color white/gray for dark theme

### 5. University Logo (`images/university-logo.svg`)
- **Format**: SVG or PNG with transparency
- **Size**: 200x60px
- **Which University?**: Your Psychology & Computer Science degree institution
- **Source**: University website → About → Media/Brand

---

## 🎨 Skill Icons (Optional but Recommended)

Place in `icons/` folder (32x32px, SVG or PNG):

- `sap.svg` - SAP SuccessFactors logo
- `ai.svg` - Brain or neural network icon
- `aws.svg` - Amazon Web Services logo
- `python.svg` - Python programming logo
- `automation.svg` - Gear/workflow icon
- `design.svg` - Design tool icon

**Free Icon Sources**:
- [Simple Icons](https://simpleicons.org/) - Brand logos
- [Iconify](https://icon-sets.iconify.design/) - Massive collection
- [Remix Icon](https://remixicon.com/) - Clean modern icons

---

## 📋 Quick Start: Using Your Existing Photos

Based on typical photo availability, here's what you can do RIGHT NOW:

### Option 1: Use What You Have
```
images/
├── hero-photo.jpg          → Your LinkedIn profile photo (high-res)
├── nvidia-project.jpg      → Screenshot of any coding project or terminal
├── books-violin.jpg        → Photo of your desk, books, or workspace
├── deloitte-logo.svg       → Download from web
└── university-logo.svg     → Download from university site
```

### Option 2: Use Placeholders First
Use placeholder services to get started immediately:

```html
<!-- In index.html, temporarily use: -->
<img src="https://via.placeholder.com/1920x1280/1E293B/3B82F6?text=Your+Photo+Here" alt="Hero">
<img src="https://via.placeholder.com/1600x1200/1E293B/3B82F6?text=NVIDIA+Project" alt="Project">
<img src="https://via.placeholder.com/800x800/1E293B/3B82F6?text=Books+%26+Violin" alt="Personality">
```

Then replace with real images as you prepare them.

---

## 🖼️ Where to Find/Take Your Photos

### Hero Photo
1. Check your LinkedIn - download high-res version
2. Check professional photos from work events
3. Take a new one: 
   - Clean background
   - Natural lighting (near window)
   - Professional but approachable expression
   - Smartphone camera is fine if well-lit

### Project Screenshot
1. Open NVIDIA Doc Navigator (if built)
2. Style the interface nicely
3. Use browser developer tools to resize window to 1600x1200
4. Take screenshot (Win+Shift+S on Windows)
5. Or: Create mockup in Figma showing the concept

### Books & Violin Photo
1. Gather 3-5 books you're reading (show spines)
2. Arrange on clean surface
3. Add violin, coffee, or personal items
4. Take photo from above at 45° angle
5. Use natural window light
6. Focus on creating "intellectual workspace" vibe

---

## 🚀 Image Optimization Workflow

### Step 1: Gather Images
Collect all photos in a temporary folder

### Step 2: Resize & Optimize
```powershell
# If you have ImageMagick installed:
magick convert input.jpg -quality 85 -resize 1920x1280^ images/hero-photo.jpg
magick convert input.jpg -quality 85 -resize 1600x1200^ images/nvidia-project.jpg
magick convert input.jpg -quality 85 -resize 800x800^ images/books-violin.jpg
```

### Step 3: Convert to WebP (Optional, Best Performance)
```powershell
magick convert images/hero-photo.jpg -quality 85 images/hero-photo.webp
```

### Step 4: Online Optimization (No Software Needed)
1. Go to [Squoosh.app](https://squoosh.app)
2. Upload each image
3. Choose "MozJPEG" format
4. Set quality to 85
5. Resize to recommended dimensions
6. Download optimized image

---

## ✅ Image Checklist

Before launching, verify:

- [ ] `images/hero-photo.jpg` exists and < 200KB
- [ ] `images/nvidia-project.jpg` exists and < 150KB
- [ ] `images/books-violin.jpg` exists and < 100KB
- [ ] `images/deloitte-logo.svg` exists
- [ ] `images/university-logo.svg` exists
- [ ] All images have descriptive alt text in HTML
- [ ] Images display correctly on mobile (test with browser dev tools)
- [ ] No broken image links (check browser console)

---

## 🎨 Can't Find Perfect Images? Creative Alternatives

### Hero Photo Alternative
- Use a gradient background with just text (remove `<img>` tag)
- Use an abstract background image (geometric patterns)
- Commission AI-generated portrait (Midjourney, DALL-E)

### Project Screenshot Alternative
- Create a code snippet visualization
- Use NVIDIA logo on dark background
- Show terminal with relevant commands
- Display architecture diagram

### Personality Alternative
- Use a solid color with text quote
- Create a collage in Canva
- Use abstract book/music imagery
- Display your current Kindle/reading list screenshot

---

## 📞 Need Help?

If you're stuck on images:
1. Start with placeholders and launch anyway
2. Add real images incrementally
3. Portfolio functionality is more important than perfect images initially
4. You can always update images later via GitHub commit

**Remember**: A live portfolio with placeholder images > No portfolio at all!

---

## 🎯 My Recommendation for You

**Phase 1 (Launch in 1 hour)**:
- Use placeholder images or find ANY appropriate photos
- Focus on content being accurate
- Get site live on GitHub Pages

**Phase 2 (Within 1 week)**:
- Take proper book/violin photo
- Create or find NVIDIA project visual
- Get high-res professional photo

**Phase 3 (Ongoing)**:
- Optimize all images for performance
- A/B test different hero photos
- Update project screenshots as you build

---

Good luck! Your portfolio structure is ready—images are the final 10% 🚀
