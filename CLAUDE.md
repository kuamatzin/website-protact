# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Protact built using the Arsha Bootstrap template. The site is a single-page application with multiple HTML pages for specific content (COA, Anexo 30-31).

## Architecture

### Structure
- **Static HTML Site**: No build process or package manager
- **Bootstrap-based**: Uses Bootstrap 5.x with custom styling
- **Template**: Based on Arsha template from BootstrapMade
- **Multi-page**: Main index.html with additional pages (coa.html, anexo-30-31.html)

### Key Technologies
- HTML5
- CSS3 (Bootstrap + custom styles)
- JavaScript (Vanilla JS)
- PHP (contact form only)
- Google Analytics/Tag Manager integration

### Directory Structure
```
/
├── assets/           # All static assets
│   ├── css/         # Stylesheets
│   ├── img/         # Images organized by purpose
│   ├── js/          # JavaScript files
│   └── vendor/      # Third-party libraries
├── forms/           # PHP contact form handler
├── index.html       # Main landing page
├── coa.html         # COA page
└── anexo-30-31.html # Anexo page
```

## Development Guidelines

### Working with Static Files
- No build process required - edit HTML/CSS/JS files directly
- All vendor dependencies are pre-downloaded in `assets/vendor/`
- Custom styles should be added to `assets/css/style.css`
- Custom JavaScript should be added to `assets/js/main.js`

### Adding New Pages
1. Copy `inner-page.html` as a template
2. Update navigation links in the header
3. Maintain consistent header/footer structure
4. Include all necessary vendor CSS/JS files

### Modifying Styles
- Primary custom styles: `assets/css/style.css`
- Respect existing CSS organization and naming conventions
- Use Bootstrap utilities where possible before adding custom CSS

### JavaScript Functionality
- Main functionality in `assets/js/main.js`
- Uses vanilla JavaScript (no jQuery dependency)
- Key features: smooth scrolling, mobile nav toggle, form validation

### Contact Form
- PHP handler located at `forms/contact.php`
- Requires PHP Email Form library (not included in free template)
- Update email address in `contact.php` before deployment

### Analytics Integration
- Google Analytics (G-94XTWHL6DT)
- Google Tag Manager (GTM-TNKZBSQ9)
- Both are already integrated in the head section

## Testing

Since this is a static site:
1. Open `index.html` in a web browser for local testing
2. Use a local server (e.g., `python -m http.server`) for proper asset loading
3. Test responsive design at various breakpoints
4. Verify all internal links work correctly
5. Test contact form functionality (requires PHP server)

## Common Tasks

### Update Content
- Text content is directly in HTML files
- Images are in `assets/img/` with logical subdirectories
- Replace logo: Update `assets/img/white_logo.png` and `assets/img/logo.png`

### Deploy Changes
- Upload all files to web server maintaining directory structure
- Ensure PHP is enabled on server for contact form
- Set proper permissions for forms directory

### Add New Sections
1. Add HTML structure to appropriate page
2. Apply Bootstrap classes for responsive layout
3. Add custom styles to `assets/css/style.css` if needed
4. Update navigation if adding new pages

## Important Notes

- Template license requires attribution (see comments in HTML)
- Contact form requires PHP Email Form library for full functionality
- All third-party libraries are included locally (no CDN dependencies)
- WhatsApp integration may be present (check for WhatsApp button code)