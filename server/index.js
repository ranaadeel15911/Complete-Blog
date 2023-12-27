import express from 'express'
import connectToDb from './config/db.js'
import cors from 'cors'
import authRoutes from './routes/blog.js'
const app = express()
const PORT = 900
connectToDb()
app.use(cors())
app.use(express.json());
app.use(express.static("public/upload"))
app.get("/",(req,resp)=>{
resp.send("API is running ...")
})
app.use('/api/v1',authRoutes)
app.listen(PORT,()=>{
    console.log("API is running on 900 port")
})