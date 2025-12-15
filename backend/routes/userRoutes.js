import express from 'express'

// controllers
import { createUser, loginUser, logoutCurrentUser, getAllUsers, getUserProfile, updateUserProfile } from '../controllers/userControllers.js'

// middlewares
import { authenticate, authorizeAdmin} from "../middlewares/authMiddlewares.js"
const router = express.Router()

router.route("/").post(createUser).get(authenticate,authorizeAdmin,getAllUsers)
router.route("/auth").post(loginUser)
router.route("/logout").post(logoutCurrentUser)
router.route("/profile").get(authenticate,getUserProfile).put(authenticate,updateUserProfile)
export default router