const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')
const overAllReviews = require('./routes/overAllReviews')
const messages = require('./routes/messagesRoutes')
const admin = require('./routes/adminRoutes')
const event = require('./routes/eventRoutes')
const activities = require('./routes/activitiesRoutes')
require("dotenv").config();
const app = express();
const path = require('path');

//Middleware
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//ROutes
    app.use(productRoutes)
    app.use(userRoutes)
    app.use(overAllReviews)
    app.use(messages)
    app.use(admin)
    app.use(event)
    app.use(activities)

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