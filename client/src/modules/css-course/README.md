# CSS IN MY STYLE — Course Module

This module is a comprehensive CSS3 learning platform integrated into the TECH-IN-MY-STYLE application.

## 🚀 Features

- **CSS Reference**: Alphabetical and categorical guide to all CSS properties.
- **Interactive Demos**: Live playgrounds for Flexbox, Grid, and Animations.
- **CSS Compiler**: A full-featured in-browser code editor for HTML/CSS experiments.
- **Resources**: Curated notes (PDFs), video links, and developer roadmaps.
- **Responsive Navigation**: Mobile-friendly sidebar for quick property lookup.

## 📂 File Structure Mapping (Old vs New)

| Old File Name (Source) | New File Name (Integrated) | Path |
| :--- | :--- | :--- |
| `Navbar.jsx` | `CssNavbar.jsx` | `client/src/modules/css-course/components/` |
| `Footer.jsx` | `CssFooter.jsx` | `client/src/modules/css-course/components/` |
| `NavMenu.jsx` | `CssNavMenu.jsx` | `client/src/modules/css-course/components/` |
| `PageFooter.jsx` | `CssPageFooter.jsx` | `client/src/modules/css-course/components/` |
| `Home.jsx` | `CssHome.jsx` | `client/src/modules/css-course/pages/` |
| `Reference.jsx` | `CssReference.jsx` | `client/src/modules/css-course/pages/` |
| `PropertyPage.jsx` | `CssPropertyPage.jsx` | `client/src/modules/css-course/pages/` |
| `Resources.jsx` | `CssResources.jsx` | `client/src/modules/css-course/pages/` |
| `Connect.jsx` | `CssConnect.jsx` | `client/src/modules/css-course/pages/` |
| `Compiler.jsx` | `CssCompiler.jsx` | `client/src/modules/css-course/pages/` |

## 🛠️ Routing

All routes are prefixed with `/css-course` to prevent collisions with the main application:

- `/css-course` - Course Home
- `/css-course/reference` - Alphabetical Property Index
- `/css-course/property/:property` - Interactive Property Page
- `/css-course/resources` - Learning Hub
- `/css-course/compiler` - Playgrounds
- `/css-course/connect` - Community & Socials

## 🎨 Theme Consistency

The module uses the global theme variables (e.g., `--ch-primary`, `--nav-grad`) and shares the `useDarkMode` hook from `CssNavbar.jsx` to ensure a seamless experience across the entire platform.
