# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Quick start

Requirements: Node.js 16+, npm

```bash
cd frontend
npm install
npm run dev
```

Default dev URL: http://localhost:5173

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — preview built assets

The frontend expects the backend API to be reachable (see root README). For local development the backend is usually started from the repo root with `npm run backend` or `npm run fullstack`.

For API details and backend setup see the project root [README.md](../README.md).
