const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')
const overAllReviews = require('./routes/overAllReviews')
const messages = require('./routes/messagesRoutes')
require("dotenv").config();
const app = express();
const path = require('path');

//Middleware
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())

//ROutes
    app.use(productRoutes)
    app.use(userRoutes)
    app.use(overAllReviews)
    app.use(messages)

    const PORT = process.env.PORT || 3000;
    mongoose.connect(process.env.MONGODB_CONNECT_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Node API App is running on port ${PORT}`);
        })
    }).catch((err)=>{
        console.log(err) 
    })