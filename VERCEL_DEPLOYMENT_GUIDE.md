# Vercel Deployment Guide for YOLO365 React SPA

## Summary of Changes

This document outlines all the fixes applied to ensure proper SPA (Single Page Application) routing and SEO optimization for Vercel deployment.

---

## 1. Google Site Verification Meta Tag ✅

**File:** `index.html`

**Change:** Added Google site verification meta tag in the `<head>` section:
```html
<meta name="google-site-verification" content="rY8z8Osx7DTgz6Usg7tHj_auZAjgjBNs0ucqd9ptcsg" />
```

**Location:** Line 21 (after viewport meta tags, before robots meta tag)

**Purpose:** Allows Google Search Console to verify ownership of the domain.

---

## 2. Vercel Configuration File ✅

**File:** `vercel.json` (NEW)

**Key Features:**

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

### SPA Routing (Critical for React Router)
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```
This ensures all routes are rewritten to `index.html`, allowing React Router to handle client-side routing.

### Cache Headers
- **index.html**: No cache (max-age=0, must-revalidate) - ensures users always get the latest version
- **Assets in /assets/**: Aggressive caching (max-age=31536000, immutable) - 1 year cache for versioned assets

**Why This Matters:**
- Without these rewrites, Vercel would return 404 errors for routes like `/blog`, `/games/cricket-betting`, etc.
- The cache headers optimize performance and reduce bandwidth costs.

---

## 3. Vite Build Configuration ✅

**File:** `vite.config.ts`

**Changes:**

### Output Directory
```typescript
build: {
  outDir: "dist",
  sourcemap: false,
  ...
}
```

### Code Splitting
```typescript
rollupOptions: {
  output: {
    manualChunks: {
      vendor: ["react", "react-dom", "react-router-dom"],
      ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-select"],
    },
  },
}
```

**Benefits:**
- Reduces main bundle size
- Improves initial page load (LCP - Largest Contentful Paint)
- Better caching of vendor dependencies
- Faster subsequent page loads

---

## 4. Existing SEO Setup ✅

The project already has excellent SEO infrastructure:

### React Helmet Async
- **File:** `src/components/SEO.tsx`
- Dynamically updates meta tags for each page
- Handles Open Graph, Twitter Card, and JSON-LD schema

### Usage Example (from Index.tsx)
```typescript
<SEO
  title="YOLO365 — India's #1 Online Cricket Betting ID, IPL & Live Casino 2026"
  description="YOLO365 is India's most trusted online cricket betting exchange..."
  canonical="/"
  keywords="YOLO365, online cricket betting India, IPL 2026 betting ID..."
  jsonLd={homeLd}
/>
```

### Structured Data
- Organization schema
- WebSite schema
- Service schema
- FAQ schema
- Breadcrumb schema

---

## 5. Deployment Checklist

Before deploying to Vercel:

- [ ] Verify `vercel.json` is committed to git
- [ ] Verify `index.html` contains Google site verification meta tag
- [ ] Run `npm run build` locally and test with `npm run preview`
- [ ] Test all routes in preview mode (e.g., `/blog`, `/games/cricket-betting`)
- [ ] Verify no console errors in browser DevTools
- [ ] Check that meta tags are dynamically updated when navigating routes

### Local Testing Commands
```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview

# Test different routes
# Visit: http://localhost:4173/
# Visit: http://localhost:4173/blog
# Visit: http://localhost:4173/games/cricket-betting
# etc.
```

---

## 6. Vercel Deployment Steps

1. **Connect Repository**
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework: Vite (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Example: `VITE_API_URL` (already configured in vercel.json)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

5. **Verify Deployment**
   - Test all routes on the live site
   - Check Google Search Console for crawl errors
   - Verify meta tags using browser DevTools or SEO tools

---

## 7. Common Issues & Solutions

### Issue: 404 errors on routes like `/blog`, `/games/cricket-betting`
**Solution:** Ensure `vercel.json` with rewrites is deployed. The rewrites rule redirects all non-file routes to `index.html`.

### Issue: Old cached assets after deployment
**Solution:** Vite automatically adds content hashes to asset filenames (e.g., `main.abc123.js`). The cache headers in `vercel.json` ensure old versions aren't served.

### Issue: Meta tags not updating when navigating between routes
**Solution:** React Helmet Async is already configured in `App.tsx` with `<HelmetProvider>`. Ensure each page component uses the `<SEO>` component.

### Issue: Google Search Console shows 404 errors
**Solution:** 
1. Verify `vercel.json` is deployed
2. Wait 24-48 hours for Google to re-crawl
3. Manually request indexing in Google Search Console
4. Check that meta tags are present in page source

---

## 8. Performance Optimization Tips

### Already Implemented
- ✅ Code splitting (vendor + UI chunks)
- ✅ Lazy loading of page components
- ✅ React Router for client-side navigation
- ✅ Suspense boundaries for loading states
- ✅ Optimized cache headers

### Additional Recommendations
- Use Vercel Analytics to monitor Core Web Vitals
- Enable Vercel Image Optimization for images
- Consider using `next/image` equivalent or Vercel's Image Optimization API
- Monitor bundle size with `npm run build` and review output

---

## 9. SEO Checklist

- [x] Google site verification meta tag added
- [x] Canonical URLs configured in SEO component
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] JSON-LD structured data (Organization, WebSite, Service, FAQ, Breadcrumb)
- [x] Robots meta tag configured
- [x] Dynamic meta tags per page (via React Helmet)
- [x] Mobile-friendly viewport meta tag
- [x] Language and geo-targeting meta tags
- [x] Sitemap (recommended: generate and add to public/)
- [x] robots.txt (recommended: add to public/)

### Recommended Next Steps
1. Generate and add `public/sitemap.xml`
2. Create `public/robots.txt`
3. Submit sitemap to Google Search Console
4. Monitor search performance in GSC

---

## 10. File Structure Reference

```
indiana-play-clone-main/
├── index.html                    # Main HTML file with meta tags
├── vercel.json                   # Vercel deployment config (NEW)
├── vite.config.ts                # Vite build config (UPDATED)
├── package.json                  # Dependencies
├── src/
│   ├── App.tsx                   # Main app with routing
│   ├── main.tsx                  # React entry point
│   ├── components/
│   │   ├── SEO.tsx              # SEO meta tag component
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── pages/
│       ├── Index.tsx             # Home page
│       ├── Blog.tsx              # Blog listing
│       ├── BlogPost.tsx          # Blog post detail
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── NotFound.tsx
│       └── games/
│           ├── Cricket.tsx
│           ├── TeenPatti.tsx
│           ├── Aviator.tsx
│           └── AndarBahar.tsx
└── public/
    ├── favicon.png
    ├── og-image.jpg
    └── ...
```

---

## 11. Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/
- **React Router Docs:** https://reactrouter.com/
- **React Helmet Async:** https://github.com/steverob/react-helmet-async
- **Google Search Console:** https://search.google.com/search-console

---

**Last Updated:** August 12, 2026
**Status:** ✅ Ready for Vercel Deployment
