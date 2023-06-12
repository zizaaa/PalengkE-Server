const express = require('express')
const {getMethod,postMethod} = require('../controllers/userController')
const router = express.Router()

//user routes
    //get all users
        router.get('/users',getMethod)
    //add user
        router.post('/users',postMethod)

module.exports = router