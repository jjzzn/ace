# Migration Guide: URL Images → Uploaded Assets

## Overview
This guide helps you migrate from using external image URLs to locally uploaded assets.

## Folder Structure Created

```
src/assets/
├── images/      # General images (banners, backgrounds, etc.)
├── logos/       # Company/event logos
├── icons/       # UI and social media icons
├── sponsors/    # Sponsor logos
└── README.md

public/assets/
├── images/      # Large static images
├── logos/       # High-res logos
├── icons/       # Favicons, app icons
├── sponsors/    # Public sponsor assets
└── README.md
```

## Migration Steps

### 1. Download Your Images
Download all images currently referenced by URL and organize them into the appropriate folders.

### 2. Update Import Statements

**Before (URL):**
```jsx
<img src="https://example.com/logo.png" alt="Logo" />
```

**After (Imported Asset):**
```jsx
import logo from '@/assets/logos/logo.png';

<img src={logo} alt="Logo" />
```

### 3. Update Component Examples

#### Banner Component
```jsx
// Before
<img src="https://cdn.example.com/banner.jpg" />

// After
import bannerImage from '@/assets/images/banner.jpg';
<img src={bannerImage} />
```

#### Sponsor Logos
```jsx
// Before
const sponsors = [
  { logo: "https://example.com/sponsor1.png" },
  { logo: "https://example.com/sponsor2.png" }
];

// After
import sponsor1 from '@/assets/sponsors/sponsor1.png';
import sponsor2 from '@/assets/sponsors/sponsor2.png';

const sponsors = [
  { logo: sponsor1 },
  { logo: sponsor2 }
];
```

#### Social Media Icons
```jsx
// Before
<img src="https://icons.com/facebook.svg" />

// After
import facebookIcon from '@/assets/icons/facebook.svg';
<img src={facebookIcon} />
```

## Best Practices

### Image Optimization
1. **Compress images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB for photos, < 100KB for logos

2. **Choose the right format**
   - `.webp` for photos (best compression)
   - `.svg` for logos and icons (scalable)
   - `.png` for images needing transparency
   - `.jpg` for photos without transparency

3. **Resize appropriately**
   - Don't upload 4K images if you only display them at 800px
   - Create multiple sizes if needed (thumbnail, medium, large)

### File Naming
- Use lowercase with hyphens: `event-banner.jpg`
- Be descriptive: `ace-2024-logo.svg`
- Include size variants: `logo-sm.png`, `logo-lg.png`

### Path Aliases
If you have path aliases configured in `vite.config.js`:
```js
import logo from '@/assets/logos/logo.png';
```

Otherwise use relative paths:
```js
import logo from '../assets/logos/logo.png';
```

## Benefits of Local Assets

✅ **Faster loading** - No external network requests  
✅ **Offline support** - Works without internet  
✅ **Build optimization** - Vite optimizes and caches assets  
✅ **Version control** - Assets tracked in git  
✅ **No broken links** - No dependency on external URLs  
✅ **Better SEO** - Faster page loads improve rankings  

## Checklist

- [ ] Download all external images
- [ ] Organize images into appropriate folders
- [ ] Update all component imports
- [ ] Test all pages to ensure images load
- [ ] Optimize image sizes and formats
- [ ] Remove old URL references
- [ ] Update any documentation
- [ ] Commit changes to git

## Need Help?

Check the README files in:
- `src/assets/README.md` - For bundled assets
- `public/assets/README.md` - For static assets
