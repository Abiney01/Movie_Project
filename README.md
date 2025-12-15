# Movie Project

Simple full-stack movie management application (Node + Express backend, React frontend).

## Tech stack
- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, Vite, Redux Toolkit
- Auth: JWT

## Quick start

Prerequisites: Node.js (16+), npm, MongoDB (local or cloud)

1. Install backend dependencies and run:

```powershell
cd backend
npm install
npm run dev
```

2. Install frontend dependencies and run:

```powershell
cd frontend
npm install
npm run dev
```

Open the frontend dev server URL printed by Vite (usually http://localhost:5173).

## Environment variables

Create a `.env` in `backend/` with at least:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing tokens
- `PORT` — backend port (optional, default in code)

Frontend may use its default Vite settings; add env vars if you integrate external services.

## Available API (overview)

- Auth: `POST /api/users/login`, `POST /api/users/register`, `GET /api/users/profile` (protected)
- Movies: `GET /api/movies`, `GET /api/movies/:id`, `POST /api/movies` (admin), `PUT /api/movies/:id` (admin), `DELETE /api/movies/:id` (admin)
- Genres: `GET /api/genres`, `POST /api/genres` (admin), `PUT /api/genres/:id`, `DELETE /api/genres/:id`

Refer to the route files in `backend/routes/` for exact paths and controllers.

## Project structure (high level)

- `backend/` — server code (routes, controllers, models, middlewares)
- `frontend/` — React app with components, pages, and Redux state

Notable files:
- `backend/index.js` — server entry
- `backend/models/` — Mongoose models (`User`, `Movie`, `Genre`)
- `frontend/src/` — React source code

## Features

- User registration and login (JWT)
- Role-based admin actions for managing movies and genres
- Movie and genre CRUD




