# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Slidev-based presentation template specifically designed for mathematics education at TuoEdu (拓课堂). It features specialized math components, LaTeX support, interactive drawing capabilities, and customizable branding with watermarks.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server with live reload
```

### Building
```bash
npm run build        # Build the main slides.md file
npm run export       # Export slides to PDF

# Build specific lessons
npm run build:lesson4   # Build Lesson4.md with specific base path
npm run build:lesson5   # Build Lesson5.md with specific base path
npm run build:all      # Build all .md files
```

### Creating New Presentations
```bash
# Copy existing slides as template
cp slides.md my-lesson.md

# Build new lesson
npx slidev build my-lesson.md --base /my-lesson/ --out dist/my-lesson
```

## Architecture and Key Concepts

### Project Structure
- **slides.md**: Main presentation content file containing all slides
- **components/edu/**: Educational components (Question, Answer, Example, Definition, Theorem, Note, TwoColumn)
- **layouts/**: Custom slide layouts (cover, intro, section-start)
- **styles/**: CSS for components, fonts, and layouts
- **setup/**: Configuration for KaTeX math rendering and Shiki syntax highlighting
- **global-top.vue**: Manages watermark display based on frontmatter settings

### Slide Format Rules

#### Slide Separation
Use `---` to separate slides. Critical formatting:
- No blank lines between `---` and first property
- No blank lines between last property and closing `---`

```markdown
---
layout: center
class: text-center
section: "Section Title"
---
```

#### Component Usage
For proper math rendering in components:
- Leave one blank line after opening tag
- Leave one blank line before closing tag

```vue
<Definition title="Title">

Content with $math$ formulas

</Definition>
```

### Math Support
- Uses KaTeX for LaTeX rendering
- Inline math: `$formula$`
- Block math: `$$formula$$`
- Custom macros defined in slidev.config.ts:
  - `\R` → `\mathbb{R}`
  - `\N` → `\mathbb{N}`
  - `\Z` → `\mathbb{Z}`
  - `\vec` → `\boldsymbol`
  - `\mat` → `\mathbf`
  - `\diff` → `\mathrm{d}`
  - `\pd` → `\partial`

### Watermark Control
Control watermark display via frontmatter:
```yaml
---
watermarkEnabled: true  # or false
---
```

### GitHub Pages Deployment
Pushes to main branch automatically deploy via GitHub Actions. The presentation is accessible at `https://<username>.github.io/<repository-name>/`

## Important Notes
- All presentation content goes in `.md` files (slides.md or custom lesson files)
- The template includes TlDraw addon for interactive drawing during presentations
- Components are auto-registered globally from the components/ directory
- The template supports both light and dark color schemes