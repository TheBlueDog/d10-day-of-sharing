# AGENTS.md - d10-day-of-sharing Project

## Build, Lint, and Test Commands

### Build Commands
- `npm run build` - Compile Tailwind CSS from css/tailwind.css to docs/build/tailwind.css
- `npm run watch` - Watch for changes in tailwind.css and rebuild automatically

### Test Commands
- No specific test commands found in package.json
- This is a static site with Tailwind CSS and JavaScript gallery functionality

## Code Style Guidelines

### General Principles
- This project uses Tailwind CSS for styling with PostCSS
- JavaScript follows standard ES5+ syntax
- All JavaScript files should be properly formatted and linted

### Imports and Modules
- Uses CommonJS module system (`module.exports`)
- No complex import structures found
- Gallery JavaScript function uses self-contained pattern

### Formatting
- Standard indentation (typically 2 spaces for JavaScript)
- No specific ESLint or formatting rules found
- CSS follows Tailwind's utility-first approach

### Naming Conventions
- JavaScript: camelCase for functions and variables
- CSS: BEM-style naming (gallery__item, gallery__image--lazy)
- File naming: lowercase with hyphens for consistency

### Error Handling
- Basic error prevention in JavaScript
- No explicit error handling patterns observed
- Gallery function uses defensive programming with null checks

### JavaScript Specifics
- Uses strict mode ("use strict")
- Functions are self-contained with no global pollution
- Uses array destructuring and modern JavaScript patterns

### Code Organization
- CSS files in `css/` directory
- JavaScript in `docs/build/` directory
- HTML files in project root
- Tailwind configuration in `tailwind.config.js`

### Tailwind Configuration
- Uses default Tailwind configuration with custom minHeight values
- Includes @tailwindcss/forms plugin
- Purge configuration is empty (development mode)

### Additional Notes
- No unit tests or test runners configured
- Project focuses on static website generation with Tailwind CSS
- Gallery.js is a complex JS component with animation logic
- Uses live-server for local development

## Cursor/Copilot Integration

No Cursor rules found in .cursor/rules/
No Copilot instructions found in .github/copilot-instructions.md

## Project Structure
```
.
├── css/
│   └── tailwind.css
├── docs/
│   ├── build/
│   │   └── gallery.js
│   └── index.html
├── package.json
├── postcss.config.js
└── tailwind.config.js
```