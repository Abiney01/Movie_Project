import express from 'express'
const router = express.Router()

// controllers
import { createMovie, getAllMovies, getSpecificMovie, updateMovie } from '../controllers/movieControllers.js'
// middlewares
import { authenticate, authorizeAdmin } from '../middlewares/authMiddlewares.js'
import checkId from '../middlewares/checkId.js'

// public
router.get("/all-movies",getAllMovies)
router.get("/specific-movie/:id",getSpecificMovie)
// restricted
// admin
router.post("/create-movie",authenticate,authorizeAdmin,createMovie)
router.put("/update-movie/:id",authenticate,authorizeAdmin,updateMovie)

export default router