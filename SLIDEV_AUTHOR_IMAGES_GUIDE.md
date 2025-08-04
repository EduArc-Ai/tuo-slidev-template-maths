# Slidev Author Guide: Working with Images

## Overview

This guide explains how to use images in your Slidev presentations, from local development to uploading to the tuoacademy system.

## Key Principles

1. **Same structure locally and in production** - Your local setup matches the deployed version
2. **Absolute paths** - Always use `/images/filename.ext` in your markdown
3. **Simple workflow** - Upload markdown + images, system handles the rest

## Local Development Setup

### 1. Project Structure

Create your local Slidev project with this structure:

```
my-slides/
├── slides.md                 # Your presentation content
├── public/
│   └── images/              # Your image files go here
│       ├── chart.png
│       ├── diagram.svg
│       └── background.jpg
├── package.json
└── node_modules/
```

### 2. Installing Slidev Locally

```bash
# Install Slidev globally
npm install -g @slidev/cli

# Or use in your project
npm init slidev@latest my-slides
cd my-slides
```

### 3. Adding Images

1. **Create the images directory**:
   ```bash
   mkdir -p public/images
   ```

2. **Add your image files** to `public/images/`:
   ```
   public/images/
   ├── chart.png
   ├── diagram.svg
   ├── background.jpg
   └── icon.webp
   ```

### 4. Referencing Images in Markdown

Always use **absolute paths** starting with `/images/`:

```markdown
---
theme: default
background: /images/background.jpg
---

# My Presentation

## Slide with Image

![Chart Description](/images/chart.png)

## Slide with Styled Image

<img src="/images/diagram.svg" class="w-96 mx-auto" />

## Slide with Background

---
background: /images/background.jpg
class: text-white
---

# Text over background image
```

### 5. Testing Locally

```bash
# Start development server
npx slidev slides.md

# Build for production (optional, to test build)
npx slidev build slides.md
```

**Important**: Test your presentation locally before uploading to ensure all images display correctly.

## Uploading to tuoacademy

### 1. Prepare Your Files

Before uploading, ensure you have:
- ✅ `slides.md` file with your presentation
- ✅ All image files from `public/images/` directory
- ✅ Tested locally and all images work

### 2. Upload Process

1. **Go to Django Admin** → Courses → Materials
2. **Create or edit a Material** with type "Slide"
3. **Upload Markdown File**: Select your `slides.md`
4. **Upload Images**: Select all image files from your `public/images/` directory
5. **Save** - The system will automatically build and deploy your slides

### 3. What Happens After Upload

1. ✅ System validates your files (format, size, type)
2. ✅ Images are placed in `/public/images/` during build
3. ✅ Slidev builds your presentation with images included
4. ✅ Built slides are uploaded to CDN with images accessible at `/images/` paths
5. ✅ **Uploaded images are cleaned up** from template (permanent assets preserved)
6. ✅ Your slides are live at `https://slides.tuoacademy.com/your-path`

## Image Guidelines

### Supported Formats

- ✅ PNG (.png)
- ✅ JPEG (.jpg, .jpeg)
- ✅ GIF (.gif)
- ✅ SVG (.svg)
- ✅ WebP (.webp)

### File Size Limits

- **Maximum**: 10MB per image
- **Recommended**: Under 2MB for faster loading

### Best Practices

1. **Optimize images** before uploading:
   ```bash
   # Example with ImageMagick
   convert large-image.jpg -resize 1920x1080 -quality 85 optimized-image.jpg
   ```

2. **Use appropriate formats**:
   - **PNG**: Screenshots, simple graphics with transparency
   - **JPEG**: Photos, complex images
   - **SVG**: Icons, simple graphics (scalable)
   - **WebP**: Modern format, smaller file sizes

3. **Name files clearly**:
   ```
   ✅ Good: chart-revenue-2024.png, user-flow-diagram.svg
   ❌ Avoid: IMG_001.jpg, screenshot.png
   ```

4. **Use consistent dimensions** for similar image types

## Common Image Use Cases

### 1. Slide Backgrounds

```markdown
---
background: /images/hero-background.jpg
class: text-white
layout: cover
---

# Title Slide
## Subtitle
```

### 2. Content Images

```markdown
# Data Analysis Results

![Sales Chart](/images/sales-chart.png)

The chart above shows our Q4 performance.
```

### 3. Styled Images

```markdown
<div class="flex justify-center">
  <img src="/images/architecture-diagram.svg" class="w-4/5" />
</div>
```

### 4. Image Grids

```markdown
<div class="grid grid-cols-2 gap-4">
  <img src="/images/before.jpg" />
  <img src="/images/after.jpg" />
</div>
```

### 5. Logo/Icons in Content

```markdown
<div class="flex items-center gap-2">
  <img src="/images/company-icon.png" class="w-8 h-8" />
  <span>Company Name</span>
</div>
```

## Troubleshooting

### Images Not Showing Locally

1. **Check file path**: Ensure images are in `public/images/`
2. **Check reference**: Use `/images/filename.ext` (absolute path)
3. **Check case sensitivity**: `image.PNG` ≠ `image.png`
4. **Restart server**: Sometimes needed after adding new images

### Images Not Showing After Upload

1. **Check upload**: Ensure all images were selected during upload
2. **Check file names**: Must match exactly (case-sensitive)
3. **Check file size**: Must be under 10MB
4. **Check format**: Must be supported format
5. **Check build logs**: Look for error messages in admin

### Build Failures

Common causes:
- **Missing images**: Referenced in markdown but not uploaded
- **Invalid file format**: Unsupported image type
- **File too large**: Over 10MB limit
- **Filename issues**: Special characters, spaces, non-ASCII

## Advanced Tips

### 1. Dynamic Image Sizing

```markdown
<!-- Responsive image -->
<img src="/images/chart.png" class="w-full md:w-1/2" />

<!-- Fixed size -->
<img src="/images/icon.svg" style="width: 200px; height: 200px;" />
```

### 2. Image with Click Actions

```markdown
<img src="/images/interactive-diagram.png" 
     @click="$slidev.nav.next()" 
     class="cursor-pointer" />
```

### 3. Conditional Images

```markdown
<img v-if="$slidev.nav.currentPage > 5" 
     src="/images/detailed-view.png" />
```

## Migration from Other Systems

### From PowerPoint
1. Export images from PowerPoint
2. Save as PNG/JPEG in `public/images/`
3. Convert slides to Slidev markdown format
4. Reference images with `/images/` paths

### From Google Slides
1. Download images from Google Slides
2. Organize in `public/images/` directory
3. Create Slidev markdown with image references

## Getting Help

1. **Test locally first** - Most issues can be caught during local development
2. **Check file names and paths** - Most common issue
3. **Verify file formats and sizes** - Check against guidelines
4. **Contact support** with specific error messages if needed

## Example Complete Workflow

```bash
# 1. Create local project
mkdir my-presentation
cd my-presentation
npm init slidev@latest .

# 2. Add images
mkdir -p public/images
cp ~/Downloads/*.png public/images/

# 3. Create slides.md
cat > slides.md << 'EOF'
---
theme: default
background: /images/title-bg.jpg
---

# My Presentation

![Main Concept](/images/concept-diagram.png)

---

# Details

<img src="/images/chart.svg" class="w-3/4 mx-auto" />
EOF

# 4. Test locally
npx slidev slides.md

# 5. Upload to tuoacademy
# - Upload slides.md
# - Upload all files from public/images/
# - Save and wait for build
```

This workflow ensures your slides work perfectly both locally and in production! 🎉