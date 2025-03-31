const express = require("express");
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors());






const pracRoutes =require("./src/routes/PracRoutes")
    app.use(pracRoutes)




mongoose.connect("mongodb://127.0.0.1:27017/Practice").then(()=>{
    console.log("connected....")
})




const PORT =3500;
app.listen(PORT,()=>{
    console.log("server started ",PORT)
})