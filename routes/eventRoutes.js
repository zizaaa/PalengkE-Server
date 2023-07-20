const express = require('express')
const {postMethod,getMethod,putMethod,deleteMethod} = require('../controllers/eventController')
const router = express.Router()

    //add
        router.post('/event', postMethod)

    //get all 
        router.get('/events',getMethod)
        
    //update
        router.put('/event/:id',putMethod)

    //delete
        router.delete('/event/:id',deleteMethod)

module.exports = router