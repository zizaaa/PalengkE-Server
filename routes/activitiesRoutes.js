const express = require('express')
const {postMethod,getMethod,putMethod,deleteMethod} = require('../controllers/activitiesControllers')
const router = express.Router()

    //add
        router.post('/activities', postMethod)

    //get all 
        router.get('/activities',getMethod)
        
    //update
        router.put('/activities/:id',putMethod)

    //delete
        router.delete('/activities/:id',deleteMethod)

module.exports = router