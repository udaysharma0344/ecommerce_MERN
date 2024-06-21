import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'

// configure env 
dotenv.config();

//database configure 
connectDB();

// rest object 
const app = express();

// middelwares
app.use(express.json());
app.use(morgan(`dev`));

// routing
app.use('/api/v1/auth',authRoutes);

// rest api 
app.get("/",(req,res)=>{
    res.send("<h1>Wellcome to Ecommerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_mode} on port ${PORT}`.bgMagenta.black);
})

try {
    
} catch (error) {
    
}