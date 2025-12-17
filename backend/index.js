import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import path from 'path'

// Files
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import genreRoutes from './routes/genreRoutes.js'
import moviesRoutes from './routes/movieRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

// Configurations 
dotenv.config()
connectDB()

const app = express()

//middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT = process.env.PORT

// routes
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/genre",genreRoutes)
app.use("/api/v1/movies",moviesRoutes)
app.use("/api/v1/upload",uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname + '/uploads')))
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`)
})