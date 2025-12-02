# 🚀 Quick Deployment Guide

## Deploy Your Portfolio to GitHub Pages in 10 Minutes

---

## ✅ Prerequisites

- GitHub account (create at https://github.com/join if needed)
- Git installed on your computer
- Portfolio files ready (index.html, styles.css, script.js)

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Files

1. **Add Your Images** (or use placeholders temporarily):
   ```
   portfolio/
   ├── images/
   │   ├── hero-photo.jpg
   │   ├── nvidia-project.jpg
   │   └── books-violin.jpg
   ```

2. **Update Your Personal Info** in `index.html`:
   - Line 15: Your name
   - Line 26-30: Hero section text
   - Lines 180-190: Contact links (email, LinkedIn, GitHub)

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `YOUR-USERNAME.github.io` 
   - Example: `jack-amichai.github.io`
   - ⚠️ Must use this exact format for GitHub Pages to work automatically
3. Description: "Professional portfolio website"
4. Keep it **Public**
5. ❌ Do NOT initialize with README (we already have one)
6. Click **Create repository**

### Step 3: Push Your Code to GitHub

Open PowerShell in your portfolio folder and run:

```powershell
# Navigate to your portfolio folder
cd "c:\Users\yamichai\OneDrive - Deloitte (O365D)\Documents\General\webs\portfolio"

# Initialize git repository
git init

# Configure git (replace with your info)
git config user.name "Jack Amichai"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio launch"

# Set main branch
git branch -M main

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git push -u origin main
```

**If prompted for GitHub credentials**:
- Use your GitHub username
- For password, use a Personal Access Token (not your GitHub password)
- Create token at: https://github.com/settings/tokens
- Permissions needed: `repo` scope

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 5: View Your Live Site! 🎉

Your portfolio is now live at:
```
https://YOUR-USERNAME.github.io
```

Example: `https://jack-amichai.github.io`

---

## 🎨 Using Temporary Placeholder Images

If you don't have images ready yet, update `index.html` temporarily:

```html
<!-- Replace image sources with placeholders -->
<img src="https://via.placeholder.com/1920x1280/1E293B/3B82F6?text=Jack+Amichai" alt="Jack Amichai" class="hero-image">

<img src="https://via.placeholder.com/1600x1200/1E293B/3B82F6?text=NVIDIA+Doc+Navigator" alt="Project showcase" class="work-bg">

<img src="https://via.placeholder.com/800x800/1E293B/3B82F6?text=Books+and+Violin" alt="Currently reading" class="personality-image">
```

Then later, when you have real images:
1. Add images to `images/` folder
2. Update image paths in `index.html`
3. Commit and push:
```powershell
git add .
git commit -m "Add real portfolio images"
git push
```

---

## 🔧 Common Issues & Solutions

### Issue: Git not recognized
**Solution**: Install Git from https://git-scm.com/download/win

### Issue: Authentication failed
**Solution**: 
1. Create Personal Access Token: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select `repo` scope
4. Copy token and use as password when pushing

### Issue: Site not loading after 5 minutes
**Solutions**:
1. Check Settings → Pages shows "Your site is live at..."
2. Verify repository name is exactly `YOUR-USERNAME.github.io`
3. Clear browser cache (Ctrl + Shift + R)
4. Check Actions tab for build errors

### Issue: Images not showing
**Solutions**:
1. Verify image files are in `images/` folder
2. Check image paths are relative: `images/filename.jpg` not `/images/filename.jpg`
3. Verify filenames match exactly (case-sensitive)
4. Look at browser console (F12) for 404 errors

### Issue: Layout broken on mobile
**Solution**: 
1. Hard refresh browser (Ctrl + Shift + R)
2. Check responsive design mode in DevTools (F12)
3. Verify viewport meta tag exists in HTML

---

## 📝 Updating Your Portfolio

After initial deployment, to make changes:

```powershell
# Make your edits to files

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update project descriptions"

# Push to GitHub
git push

# Wait 1-2 minutes for GitHub Pages to rebuild
```

---

## 🌐 Adding a Custom Domain (Optional)

### If you own a domain (e.g., jackamichai.com):

1. **Add CNAME file** to your portfolio folder:
```powershell
echo "jackamichai.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. **Configure DNS** with your domain provider:

**For Apex Domain** (jackamichai.com):
```
Type: A
Host: @
Value: 185.199.108.153
```
Add 3 more A records with:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**For WWW Subdomain** (www.jackamichai.com):
```
Type: CNAME
Host: www
Value: YOUR-USERNAME.github.io
```

3. **Enable in GitHub**:
- Settings → Pages
- Custom domain: Enter your domain
- Check "Enforce HTTPS" (after DNS propagates)

4. **Wait 24-48 hours** for DNS propagation

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

### Content
- [ ] Personal name and title updated
- [ ] Email address is correct
- [ ] LinkedIn URL is correct
- [ ] GitHub URL is correct
- [ ] All project descriptions are accurate
- [ ] Skills list matches your expertise

### Technical
- [ ] Site loads on desktop
- [ ] Site loads on mobile
- [ ] All images display correctly
- [ ] All links work (no 404s)
- [ ] Navigation menu works
- [ ] Smooth scroll works
- [ ] No console errors (F12)

### Performance
- [ ] Images are optimized (< 200KB each)
- [ ] Page loads in < 3 seconds
- [ ] Responsive on all screen sizes

### SEO
- [ ] Page title is set
- [ ] Meta description is set
- [ ] All images have alt text

---

## 📊 Monitoring Your Portfolio

### View Site Statistics
1. Go to https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io/graphs/traffic
2. See visitor counts (updated daily)

### Check Performance
1. Open https://pagespeed.web.dev/
2. Enter your portfolio URL
3. Aim for 90+ scores on all metrics

### Analytics (Optional)
Add Google Analytics:
1. Create account at https://analytics.google.com
2. Get tracking code
3. Add before `</head>` in `index.html`
4. Commit and push

---

## 🎯 Next Steps After Deployment

1. **Share Your Portfolio**:
   - Update LinkedIn with portfolio URL
   - Add to GitHub profile README
   - Share with recruiters
   - Add to resume

2. **Optimize**:
   - Run Lighthouse audit
   - Compress images further if needed
   - Add more projects
   - Write blog posts

3. **Maintain**:
   - Update quarterly with new projects
   - Keep skills current
   - Refresh screenshots
   - Add testimonials

---

## 🆘 Need More Help?

### Resources
- GitHub Pages Docs: https://pages.github.com/
- Git Tutorial: https://git-scm.com/doc
- Markdown Guide: https://www.markdownguide.org/

### Troubleshooting
1. Check GitHub Status: https://www.githubstatus.com/
2. Read build logs: Repository → Actions tab
3. Search GitHub Community: https://github.community/

---

## 🎉 Congratulations!

Your professional portfolio is now live and accessible worldwide. 

**Share your URL and start attracting opportunities!** 🚀

---

*Last updated: December 2025*
