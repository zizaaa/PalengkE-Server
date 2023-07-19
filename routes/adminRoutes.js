const express = require('express')
const {postMethod,getMethod,putMethod,deleteMethod} = require('../controllers/adminController')
const router = express.Router()

    //add
        router.post('/admin', postMethod)

    //get all 
        router.get('/admins',getMethod)
        
    //update
        router.put('/admin/:id',putMethod)

    //delete
        router.delete('/admin/:id',deleteMethod)

module.exports = router