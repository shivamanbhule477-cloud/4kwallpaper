#!/bin/bash

# GitHub Pages Deployment Script
# Run this to build and push your Next.js static site to GitHub Pages

echo "🔨 Building Next.js application for GitHub Pages..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix errors and try again."
  exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📝 Git commands to push changes:"
echo ""
echo "git add ."
echo "git commit -m 'chore: deploy optimized Next.js site to GitHub Pages'"
echo "git push origin main"
echo ""
echo "⏳ GitHub Pages will automatically build and deploy your site."
echo "🌐 Your site will be available at: https://shivamanbhule477-cloud.github.io/4kwallpaper"
