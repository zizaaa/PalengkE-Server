const express = require('express')
const {getMethod,postMethod,putMethod} = require('../controllers/userController')
const router = express.Router()

//user routes
    //get all users
        router.get('/users',getMethod)
    //add user
        router.post('/users',postMethod)
    //edit user
        router.put('/user/:id',putMethod)

module.exports = router