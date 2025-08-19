# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project called "cloudpeak-website-static" built with Vite. It's a minimal vanilla JavaScript application using ES6 modules.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to dist/)
- `npm run preview` - Preview production build locally

## Architecture

The project follows a simple vanilla JavaScript structure:

- **Entry Point**: `index.html` loads the main application
- **Main Module**: `src/main.js` - Sets up the DOM and imports all components
- **Components**: Currently has one interactive component (`counter.js`)
- **Styling**: Single CSS file (`src/style.css`) with CSS custom properties and media queries for light/dark themes
- **Assets**: Static assets in `public/` and imported assets in `src/`

### Key Files

- `src/main.js` - Main entry point that renders the app HTML and initializes components
- `src/counter.js` - Interactive counter component using event listeners
- `src/style.css` - Global styles with CSS variables and responsive design
- `index.html` - HTML template with app mount point

## Build System

Uses Vite as the build tool and development server. The project is configured as an ES module (`"type": "module"` in package.json).

## Code Patterns

- ES6 modules with explicit imports/exports
- DOM manipulation using vanilla JavaScript
- Event-driven component architecture
- CSS custom properties for theming
- Responsive design with media queries