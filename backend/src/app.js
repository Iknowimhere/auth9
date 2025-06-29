import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import db from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
db()
let app=express()

app.use(cors())

app.use(express.json())

app.use("/api/v1/auth",authRoutes)


export default app;