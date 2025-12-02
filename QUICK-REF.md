# 🚀 PORTFOLIO QUICK REFERENCE CARD

## 📁 Your Portfolio Location
```
c:\Users\yamichai\OneDrive - Deloitte (O365D)\Documents\General\webs\portfolio\
```

---

## ⚡ Quick Commands

### Test Locally
```powershell
cd "c:\Users\yamichai\OneDrive - Deloitte (O365D)\Documents\General\webs\portfolio"
python -m http.server 8000
```
**Then visit**: http://localhost:8000

### Deploy to GitHub
```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### Update After Changes
```powershell
git add .
git commit -m "Update content"
git push
```

---

## 📝 Files to Edit First

| File | What to Update | Priority |
|------|---------------|----------|
| `index.html` lines 15-30 | Your name, title, subtitle | **HIGH** |
| `index.html` lines 180-190 | Email, LinkedIn, GitHub links | **HIGH** |
| `index.html` lines 65-75 | Featured project description | MEDIUM |
| `images/` folder | Add your photos | MEDIUM |
| `icons/` folder | Add skill icons | LOW |

---

## 📸 Images Needed

| Image | Size | Max File Size | Where to Use |
|-------|------|---------------|--------------|
| Hero photo | 1920x1280 | 200KB | Professional headshot |
| Project screenshot | 1600x1200 | 150KB | NVIDIA or code screenshot |
| Books & violin | 800x800 | 100KB | Personality photo |
| Deloitte logo | 200x60 | 50KB | Experience section |
| University logo | 200x60 | 50KB | Education section |
| Skill icons (×6) | 32x32 | 10KB each | Skills module |

**Temporary Placeholder**:
```
https://via.placeholder.com/1920x1280/1E293B/3B82F6?text=Your+Photo
```

---

## 🎯 Key Sections to Customize

### 1. Personal Info
- Line 15: `<div class="logo">Your Name</div>`
- Line 26: Hero title
- Line 28: Hero subtitle
- Line 184: Email address

### 2. Skills List (Lines 37-62)
Replace with your tech stack:
- SAP SuccessFactors
- AI/LLM Agents
- AWS & Cloud
- Python & SQL
- Workflow Automation
- Product Design

### 3. Projects
- **Featured**: Lines 65-75 (NVIDIA Navigator)
- **Secondary**: Lines 136-153 (PawQuest, Note2CRM)

### 4. Social Links (Lines 186-190)
- LinkedIn URL
- GitHub URL
- Twitter/X URL (optional)

---

## 🎨 Design Customization

### Change Accent Color
**File**: `styles.css`, Line 13
```css
--accent-primary: #3B82F6;  /* Electric Blue */
```

**Alternatives**:
- Orange: `#F97316`
- Teal: `#14B8A6`
- Purple: `#A855F7`
- Red: `#EF4444`

### Adjust Module Sizes
**File**: `styles.css`, Lines 280-360

Example - Make hero bigger:
```css
.hero-module {
    grid-column: 1 / 8;  /* Was 1 / 7 */
    grid-row: 1 / 3;
}
```

---

## 📚 Documentation Files

| File | Purpose | When to Use |
|------|---------|-------------|
| **START-HERE.html** | Interactive overview | Open first! |
| **SUMMARY.md** | Complete reference | Quick lookups |
| **DEPLOY.md** | GitHub Pages setup | When ready to launch |
| **IMAGE-GUIDE.md** | Photo instructions | Before adding images |
| **CONTENT-TEMPLATE.md** | Text customization | While editing content |
| **LAYOUT-GUIDE.md** | Grid system explained | To modify layout |
| **README.md** | Full documentation | Deep dives |

---

## ✅ Pre-Launch Checklist

### Must-Have Before Going Live
- [ ] Personal name updated
- [ ] Email address correct
- [ ] LinkedIn URL correct
- [ ] GitHub URL correct
- [ ] Hero subtitle feels right
- [ ] At least 1 real image (hero photo)
- [ ] Tested locally
- [ ] No console errors

### Nice-to-Have
- [ ] All images optimized
- [ ] All skill icons added
- [ ] Project descriptions polished
- [ ] Writing samples written
- [ ] Resume PDF uploaded

---

## 🆘 Common Issues & Fixes

### Images Not Showing
**Fix**: Check file paths are relative
```html
<!-- ✅ Correct -->
<img src="images/hero-photo.jpg">

<!-- ❌ Wrong -->
<img src="/images/hero-photo.jpg">
<img src="C:/Users/...">
```

### Layout Broken on Mobile
**Fix**: Clear cache (Ctrl+Shift+R)

### GitHub Push Failed
**Fix**: Use Personal Access Token as password
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Use token as password when pushing

### Site Not Loading After Deploy
**Fix**: Wait 2-3 minutes, check:
- Repository name is `username.github.io`
- Settings → Pages shows "Your site is live"
- Clear browser cache

---

## 🎯 Success Metrics

### Your Portfolio is Working When:
- ✅ Loads in < 3 seconds
- ✅ Looks good on mobile
- ✅ All links work
- ✅ Images display properly
- ✅ You're proud to share it
- ✅ Recruiters can find your contact info
- ✅ Your value is clear in 5 seconds

---

## 📞 Free Resources

### Icons
- https://simpleicons.org/ (brand logos)
- https://icon-sets.iconify.design/ (all icons)
- https://remixicon.com/ (clean modern)

### Image Optimization
- https://squoosh.app/ (compress images)
- https://tinypng.com/ (PNG/JPEG optimization)
- https://remove.bg/ (remove backgrounds)

### Testing
- https://pagespeed.web.dev/ (performance)
- https://validator.w3.org/ (HTML validation)
- https://wave.webaim.org/ (accessibility)

### Learning
- https://css-tricks.com/ (CSS tutorials)
- https://web.dev/ (web performance)
- https://developer.mozilla.org/ (web docs)

---

## 🎬 Your Next 3 Actions

### 1. Right Now (5 minutes)
```powershell
# Open START-HERE.html to see overview
start START-HERE.html

# Test your portfolio locally
cd "c:\Users\yamichai\OneDrive - Deloitte (O365D)\Documents\General\webs\portfolio"
python -m http.server 8000
# Visit: http://localhost:8000
```

### 2. Today (1 hour)
- [ ] Read CONTENT-TEMPLATE.md
- [ ] Update personal info in index.html
- [ ] Add at least placeholder images
- [ ] Test on mobile size

### 3. This Week (1-2 hours)
- [ ] Add real professional photo
- [ ] Screenshot/create project images
- [ ] Download skill icons
- [ ] Deploy to GitHub Pages
- [ ] Share URL with friends

---

## 💡 Pro Tips

1. **Launch with placeholders** - Perfect later
2. **Test on real phone** - Not just browser DevTools
3. **Get feedback early** - Friends/colleagues
4. **Update quarterly** - Keep content fresh
5. **Track analytics** - See what works
6. **A/B test headlines** - Optimize over time

---

## 🎉 You're Ready!

Everything is set up. The only thing left is:
1. **Customize** your content
2. **Add** your images
3. **Deploy** to GitHub Pages
4. **Share** with the world

**Your professional future starts now!** 🚀

---

## 📋 Bookmark These URLs

After deployment, you'll have:
- **Portfolio**: `https://YOUR-USERNAME.github.io`
- **GitHub Repo**: `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`
- **Edit Files**: VS Code or GitHub web editor

---

## 🏆 Final Words

This portfolio represents:
- ✅ Professional design
- ✅ Modern technology
- ✅ Your unique value
- ✅ Complete documentation
- ✅ Clear deployment path

**Everything you need to succeed is here.**

**Now go make it yours!** 💪

---

*Quick Reference v1.0*  
*December 2025*  
*Made for Jack Amichai* ✨

---

**Print this page or keep it open while working!** 📄
