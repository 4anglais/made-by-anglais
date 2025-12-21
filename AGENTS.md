# AGENTS.md

This file provides essential information for AI coding agents working with the **Made By Anglais** codebase.

## Project Overview

Personal portfolio website built with React, showcasing projects, skills, and contact information.

**Live Site:** https://madebyangel.netlify.app

## Technology Stack

- **Framework:** React 19.1.0
- **Routing:** React Router DOM 7.5.1
- **Icons:** FontAwesome
- **Build Tool:** react-scripts (Create React App)
- **Deployment:** Netlify
- **CMS Integration:** Stackbit (configuration added)
- **Node Version:** 18

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Code formatting (Prettier available)
npx prettier --write .
```

## Project Structure

```
/src
  /assets         - Images and static assets
  /components     - Reusable React components (Navbar, Footer, Loader)
  /pages          - Page-level components (Home)
  App.jsx         - Main app component with theme toggle and routing
  App.css         - Global styles
  index.js        - Entry point

/public           - Static files served directly
  index.html      - HTML template
  manifest.json   - PWA manifest
  sitemap.xml     - SEO sitemap
  robots.txt      - SEO robots file
  _redirects      - Netlify redirect rules
```

## Key Features & Architecture

### Theme System
- Light/Dark theme toggle implemented in `App.jsx`
- Theme state managed with React hooks
- Theme class applied to document body
- CSS defined in component-specific files (`.css`)

### Loading Strategy
- Preloads images before showing main content
- Custom `Loader` component displays during initialization
- Image preloading implemented in `useEffect` hook

### Styling Approach
- Component-specific CSS files (e.g., `Navbar.css`, `Footer.css`, `Home.css`)
- Global styles in `App.css`
- Theme-specific styles using class selectors (`.light`, `.dark`)

### Routing
- React Router DOM for navigation
- Currently single-page (Home), but structured for expansion

## Code Style Guidelines

1. **Component Files:** Use `.jsx` extension for React components, `.js` for utilities
2. **Imports:** Group by type (React, third-party, local components, styles)
3. **State Management:** Use React hooks (useState, useEffect)
4. **Styling:** One CSS file per component, co-located with component
5. **Formatting:** Prettier configured (use `npx prettier --write .`)

## Deployment

- **Platform:** Netlify
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18 (specified in `netlify.toml`)

### Security Headers
Netlify configuration includes:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Cache-Control for static assets: 1 year immutable

## Testing

- Testing framework: React Testing Library + Jest
- Run tests: `npm test`
- Test files: `*.test.js` or `*.spec.js`

## Stackbit Integration

A `stackbit.config.ts` file has been added for Stackbit CMS integration:
- Stackbit Version: ~0.6.0
- SSG: Custom
- Post-install: `npm i --no-save @stackbit/types`

## Common Tasks for AI Agents

### Adding a New Page
1. Create component in `/src/pages/`
2. Create corresponding CSS file
3. Update routing in `App.jsx`
4. Add navigation link in `Navbar.js`

### Adding a New Component
1. Create component file in `/src/components/`
2. Create corresponding CSS file
3. Import and use in parent components

### Updating Styles
1. Locate component-specific CSS file
2. Ensure theme compatibility (test both light and dark)
3. Follow existing class naming conventions

### Modifying Theme
1. Update `App.jsx` for logic changes
2. Update CSS files for visual changes
3. Test both light and dark modes

## Notes for AI Agents

- The project uses React 19.1.0 (latest) - be aware of breaking changes from older versions
- All components are functional (no class components)
- State management is done with React hooks (no Redux or external state library)
- The site is currently single-page but structured for multi-page expansion
- Responsive design is mentioned as "not yet pushed" - this may be a work in progress
- FontAwesome icons are available via `@fortawesome/react-fontawesome`
- The project follows Create React App conventions

## Git Commit Convention

When making commits, use the co-author convention:
```
Co-authored-by: angelphiri-2021 <angelphiri.2021@gmail.com>
```

## Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [FontAwesome React Documentation](https://fontawesome.com/docs/web/use-with/react)
- [Netlify Documentation](https://docs.netlify.com)
- [Stackbit Documentation](https://docs.stackbit.com)
