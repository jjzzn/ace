# Assets Folder Structure

This folder contains all static assets for the ACE project.

## Folder Organization

### `/images`
- General images used throughout the application
- Banner images, background images, hero images
- Example: `banner-bg.jpg`, `hero-image.png`

### `/logos`
- Company/event logos
- Brand assets
- Example: `ace-logo.svg`, `ace-logo.png`

### `/icons`
- UI icons
- Social media icons
- Navigation icons
- Example: `facebook-icon.svg`, `instagram-icon.svg`

### `/sponsors`
- Sponsor logos and images
- Partner company logos
- Example: `sponsor-company-1.png`, `sponsor-company-2.svg`

## Usage in Components

Import assets directly in your React components:

```jsx
import logo from '@/assets/logos/ace-logo.png';
import bannerBg from '@/assets/images/banner-bg.jpg';
import facebookIcon from '@/assets/icons/facebook.svg';

function Component() {
  return (
    <div>
      <img src={logo} alt="ACE Logo" />
      <img src={bannerBg} alt="Banner" />
      <img src={facebookIcon} alt="Facebook" />
    </div>
  );
}
```

## File Naming Convention

- Use lowercase with hyphens: `my-image.png`
- Be descriptive: `ace-conference-banner.jpg` instead of `img1.jpg`
- Include dimensions if multiple sizes: `logo-small.png`, `logo-large.png`

## Supported Formats

- **Images**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- **Vectors**: `.svg`
- **Icons**: `.svg` (preferred), `.png`

## Tips

1. Optimize images before uploading (compress, resize)
2. Use WebP format for better performance when possible
3. Use SVG for logos and icons for scalability
4. Keep file sizes reasonable (< 500KB for images, < 100KB for logos)
