import express from "express";
const router = express.Router()
// Controllers
import { createGenre, updateGenre, deleteGenre, allGenres, readGenre } from "../controllers/genreControllers.js";
// Middlewares
import { authenticate, authorizeAdmin} from "../middlewares/authMiddlewares.js"
router.route("/").post(authenticate,authorizeAdmin,createGenre)
router.route("/:id").put(authenticate,authenticate,updateGenre)
router.route("/:id").delete(authenticate,authorizeAdmin,deleteGenre)
router.route("/genres").get(authenticate,authorizeAdmin,allGenres)
router.route("/:id").get(authenticate,authorizeAdmin,readGenre)
export default router