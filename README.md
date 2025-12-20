
# Movie Project

Full-stack movie management application — Node + Express backend and React + Vite frontend.

**Tech stack:** Node.js, Express, MongoDB (Mongoose), React, Vite, Redux Toolkit, JWT auth

## Quick start (dev)

Prerequisites: Node.js 16+, npm, MongoDB (local or Atlas)

From the project root you can run both servers concurrently:

```bash
npm install
npm run fullstack
```

Or run each side separately:

```bash
# start backend (uses nodemon)
npm run backend

# start frontend (Vite)
npm run frontend
```

Frontend dev server (Vite) usually runs on http://localhost:5173. Backend port is read from `process.env.PORT`.

## Backend — environment

Create a `.env` file in the `backend/` folder with these minimum variables:

```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
```

Notes:
- The backend signs JWTs and sets them as an httpOnly cookie named `jwt`.
- The uploads folder is served statically at `/uploads`.

## API overview

Base path: `/api/v1`

Auth
- `POST /api/v1/users/register` — register new user
- `POST /api/v1/users/login` — login (sets JWT cookie)
- `GET  /api/v1/users/profile` — get profile (protected)

Movies
- `GET    /api/v1/movies` — list movies
- `GET    /api/v1/movies/:id` — movie details
- `POST   /api/v1/movies` — create (admin)
- `PUT    /api/v1/movies/:id` — update (admin)
- `DELETE /api/v1/movies/:id` — delete (admin)

Genres
- `GET    /api/v1/genre` — list genres
- `POST   /api/v1/genre` — create genre (admin)
- `PUT    /api/v1/genre/:id` — update (admin)
- `DELETE /api/v1/genre/:id` — delete (admin)

For exact route names and expected payloads, see the route files in `backend/routes/`.

## Project structure

- `backend/` — server code (routes, controllers, models, middlewares)
	- `index.js` — server entry
	- `config/db.js` — MongoDB connection
	- `controllers/` — route handlers
	- `models/` — Mongoose models (`User`, `Movie`, `Genre`)
	- `routes/` — Express routes
	- `middlewares/` — auth and helpers
- `frontend/` — React + Vite application
- `uploads/` — public uploads served at `/uploads`

## Useful scripts (root package.json)

- `npm run fullstack` — run frontend and backend concurrently
- `npm run backend` — run backend with `nodemon backend/index.js`
- `npm run frontend` — change to `frontend/` and run `npm run dev`

## Notes & Troubleshooting

- Ensure `MONGO_URI` is valid before starting the backend.
- If you don't see the backend logs, verify `PORT` is set and not already in use.
- Authentication uses an httpOnly cookie; API requests from the frontend should include credentials when needed.





