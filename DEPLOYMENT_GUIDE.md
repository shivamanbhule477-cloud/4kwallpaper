# 🚀 Step-by-Step Guide: Deploy Your 4K Wallpaper App to GitHub Pages

## ✅ What's Already Done

Your repository now includes:
- ✨ Next.js 14 configured for static export
- 🎨 Pinterest-style design system
- 🔐 Supabase authentication ready
- 📱 Responsive masonry grid layout
- ⚡ Performance optimizations
- 🔧 GitHub Actions workflow
- 📝 Complete configuration files

---

## 🎯 Step 1: Enable GitHub Pages in Repository Settings

### 1.1 Navigate to Settings
1. Go to your repository: `https://github.com/shivamanbhule477-cloud/4kwallpaper`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)

### 1.2 Configure GitHub Pages
1. Under "Build and deployment":
   - **Source**: Select `GitHub Actions` (NOT "Deploy from a branch")
2. This tells GitHub to use the workflow we created

### 1.3 Verify Configuration
- You should see: "GitHub Pages is currently being built from GitHub Actions"
- Your site URL will be: `https://shivamanbhule477-cloud.github.io/4kwallpaper`

---

## 🛠️ Step 2: Install Dependencies Locally

Open your terminal in the project directory and run:

```bash
# Navigate to your project
cd 4kwallpaper

# Install all dependencies
npm install

# Verify installation
npm run build
```

This ensures everything is ready to build.

---

## 📦 Step 3: Commit & Push Code

The code is already committed, but here's how to verify:

```bash
# Check git status
git status

# Should show: "On branch main, nothing to commit"

# If there are changes, commit them:
git add .
git commit -m "feat: Complete 4K wallpaper website setup"

# Push to GitHub
git push origin main
```

---

## ⏳ Step 4: Wait for GitHub Actions to Build & Deploy

### 4.1 Check Workflow Status
1. Go to **Actions** tab in your repository
2. Look for "Deploy Next.js to GitHub Pages" workflow
3. Wait for the green checkmark ✅ (usually takes 2-5 minutes)

### 4.2 Monitor Build Progress
The workflow will:
1. ✓ Checkout your code
2. ✓ Setup Node.js 18
3. ✓ Install dependencies
4. ✓ Build static site → generates `/out` folder
5. ✓ Upload artifact
6. ✓ Deploy to GitHub Pages

**Status indicators:**
- 🟡 Yellow = Building
- 🟢 Green = Success
- 🔴 Red = Failed (check logs)

---

## 🌐 Step 5: Access Your Live Website

Once deployment completes, visit:

```
https://shivamanbhule477-cloud.github.io/4kwallpaper
```

You should see:
- ✅ 4K Wallpaper header with logo
- ✅ Search bar
- ✅ Hero section with "Create the life you love on 4K"
- ✅ Masonry grid with placeholder pins
- ✅ Footer with links
- ✅ Responsive mobile menu

---

## 🔍 Troubleshooting

### Issue: Website shows 404 Error

**Solution:**
1. Verify in `next.config.js`:
   ```javascript
   output: 'export'
   basePath: '/4kwallpaper'
   assetPrefix: '/4kwallpaper/'
   ```

2. Ensure `.nojekyll` file exists in `/public` folder

3. Clear browser cache: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)

---

### Issue: Workflow Failed to Deploy

**Check logs:**
1. Go to **Actions** tab
2. Click on the failed workflow
3. Click on "Build Next.js Site" job
4. Scroll to see error details

**Common fixes:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building locally
npm run build

# If successful, push to GitHub
git add .
git commit -m "fix: resolve build issues"
git push origin main
```

---

### Issue: Supabase Keys Not Working

Your public keys are already configured in:
- `src/lib/supabase.ts`
- `.env.local.example`
- `deploy-nextjs.yml` (workflow)

These are safe to use on the frontend. For additional security:

1. Go to Supabase Dashboard
2. Verify your project URL and anon key match
3. Enable Row Level Security (RLS) on your database tables

---

## 🎨 Next Steps: Customize Your Site

### 1. Update Hero Section (`src/app/page.tsx`)
```typescript
// Change title and description
<h1 className="text-display-xl mb-6 text-ink">
  Your Custom Title Here
</h1>
```

### 2. Add Real Images
Replace placeholder pins with actual image URLs from Supabase Storage or Unsplash.

### 3. Connect Supabase Database
```typescript
import { supabase } from '@/lib/supabase'

// Fetch images from database
const { data, error } = await supabase
  .from('images')
  .select('*')
```

### 4. Add User Authentication
```typescript
// Login with Supabase Auth UI
import { Auth } from '@supabase/auth-ui-react'

<Auth
  supabaseClient={supabase}
  appearance={{ theme: 'light' }}
/>
```

---

## 📊 Site Performance Metrics

Your site includes:
- ⚡ **Lighthouse Score Target**: 90+
- 📱 **Mobile Responsive**: All devices
- 🎯 **Core Web Vitals**: Optimized
- 🔒 **Security**: HTTPS enforced
- 🗜️ **Compression**: Enabled
- 🖼️ **Image Optimization**: Unoptimized for static export

---

## 🔗 Useful Links

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🔐 [Supabase Docs](https://supabase.com/docs)
- 📚 [GitHub Pages Docs](https://docs.github.com/en/pages)
- ⚙️ [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## ✨ Final Checklist

Before declaring success:

- [ ] GitHub Pages enabled in Settings
- [ ] GitHub Actions workflow configured
- [ ] Website live at `https://shivamanbhule477-cloud.github.io/4kwallpaper`
- [ ] Homepage renders correctly
- [ ] Navigation bar appears
- [ ] Grid layout displays
- [ ] Mobile menu works
- [ ] Footer visible
- [ ] No console errors (F12)
- [ ] Supabase client loaded successfully

---

## 🎉 Congratulations!

Your 4K Wallpaper website is now live on GitHub Pages with:
- ✅ Static export configuration
- ✅ Pinterest-style design system
- ✅ Supabase integration
- ✅ Responsive layout
- ✅ SEO optimization
- ✅ Automatic deployment

**Questions?** Check the repository issues or GitHub Pages documentation!

---

**Last Updated**: 2026-06-12  
**Status**: Ready for Production ✅
