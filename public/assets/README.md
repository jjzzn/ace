# Public Assets Folder

This folder contains static assets that are served directly without processing by Vite.

## Folder Organization

### `/images`
- Large images that don't need bundling
- Static images referenced by URL
- Example: `event-photo-1.jpg`, `venue-map.png`

### `/logos`
- High-resolution logos for downloads
- Press kit materials
- Example: `ace-logo-hires.png`

### `/icons`
- Favicon files
- App icons
- Example: `favicon.ico`, `apple-touch-icon.png`

### `/sponsors`
- Sponsor logos for public access
- Partner assets
- Example: `sponsor-gold-1.png`

## Usage

Files in this folder are accessible via absolute URLs:

```jsx
// Accessed as: /assets/images/photo.jpg
<img src="/assets/images/photo.jpg" alt="Photo" />

// Or using environment variable
<img src={`${import.meta.env.BASE_URL}assets/logos/logo.png`} alt="Logo" />
```

## When to Use Public vs Src Assets

**Use `/public/assets/`** when:
- Files are referenced in `index.html`
- Files need a stable URL
- Files are very large (> 1MB)
- Files are downloaded by users

**Use `/src/assets/`** when:
- Files are imported in components
- Files benefit from bundling/optimization
- Files are part of the build process
- Files need cache busting via hashing
