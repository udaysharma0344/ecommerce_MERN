import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// configure env 
dotenv.config();

// rest object 
const app = express();

// rest api 
app.get("/",(req,res)=>{
    res.send("<h1>Wellcome to Ecommerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_mode} on port ${PORT}`.bgMagenta.black);
})
