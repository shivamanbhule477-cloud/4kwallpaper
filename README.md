# 4K Wallpaper - Pinterest-Style Discovery Platform

A high-performance, SEO-friendly photography discovery platform built with Next.js 14, Tailwind CSS, and Supabase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shivamanbhule477-cloud/4kwallpaper.git
cd 4kwallpaper

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📦 Build & Deployment

### Local Build (Static Export)
```bash
npm run build
```

This generates a static export in the `out/` directory, ready for GitHub Pages.

### Deploy to GitHub Pages

#### Automated (GitHub Actions - Recommended)
The repository includes a GitHub Actions workflow that automatically builds and deploys on every push to `main`.

1. Navigate to **Settings → Pages**
2. Under "Build and deployment", select:
   - **Source**: GitHub Actions
3. Push to `main` branch and deployment will start automatically

#### Manual Deployment
```bash
# Build the project
npm run build

# Commit changes
git add .
git commit -m "chore: deploy optimized Next.js site to GitHub Pages"

# Push to main (or any branch with deployment enabled)
git push origin main
```

Your site will be live at: `https://shivamanbhule477-cloud.github.io/4kwallpaper`

## 🎨 Design System

The project implements a strict Pinterest-inspired design system with:

- **Colors**: Pinterest Red (#e60023) for primary actions, warm cream palette for surfaces
- **Typography**: Inter font family (fallback for proprietary Pin Sans)
- **Border Radius**: 16px for most elements, 32px for modals, 9999px for pills
- **Spacing**: 8px base unit with consistent rhythm
- **Shadows**: Flat design with 16px modal shadow only

## 🔗 Supabase Integration

The project is configured with Supabase for authentication and data management.

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=https://jbpeoveltjtlhkjxteyy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Using Supabase Client
```typescript
import { supabase } from '@/lib/supabase'

// Get authenticated user
const { user, error } = await supabase.auth.getUser()

// Sign out
await supabase.auth.signOut()
```

## ⚡ Performance Optimizations

- **Static Export**: Pre-renders all pages at build time
- **Image Optimization**: Configured with `unoptimized: true` for GitHub Pages
- **Font Smoothing**: Hardware acceleration for better rendering
- **Lazy Loading**: Images load on demand as user scrolls
- **CSS Masonry**: Native CSS columns for responsive grid layout
- **Minimal JavaScript**: Client components only where necessary

## 📊 Key Files

- `next.config.js` - GitHub Pages configuration with static export
- `tailwind.config.ts` - Pinterest design system tokens
- `src/app/layout.tsx` - Root layout with meta tags
- `src/app/globals.css` - Global styles with performance enhancements
- `src/app/page.tsx` - Home page with masonry grid
- `src/lib/supabase.ts` - Supabase client configuration
- `public/.nojekyll` - Prevents Jekyll from ignoring _next folder

## 🔒 Security

- Only public Supabase keys are used in frontend code
- Service role keys are never committed to the repository
- Row Level Security (RLS) policies protect database access

## 📱 Responsive Design

- **Desktop** (1024px+): 4-column masonry grid
- **Tablet** (768px-1023px): 2-column grid
- **Mobile** (<768px): Single-column layout
- Touch targets: Minimum 44×44px for all interactive elements

## 🛠️ Development

```bash
# Type checking
npm run type-check

# Linting (if configured)
npm run lint

# Development server with hot reload
npm run dev
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 📝 License

MIT

## 👤 Author

[shivamanbhule477-cloud](https://github.com/shivamanbhule477-cloud)

---

**Note**: This project is deployed on GitHub Pages, which means:
- No server-side rendering
- All pages are pre-rendered at build time
- API calls should use client-side fetch or external services (e.g., Supabase)
