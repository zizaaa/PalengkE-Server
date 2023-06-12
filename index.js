const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')
require("dotenv").config();
const app = express();

//Middleware
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())

//ROutes
    app.use(productRoutes)
    app.use(userRoutes)

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_CONNECT_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Node API App is running on port ${PORT}`);
        })
    }).catch((err)=>{
        console.log(err) 
    })