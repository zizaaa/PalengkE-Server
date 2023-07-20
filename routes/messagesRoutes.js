const express = require('express')
const {getMethod,postMethod,putMethod,deleteMethod} = require('../controllers/messageController')
const router = express.Router()

    router.get('/messages',getMethod)
    router.post('/messages',postMethod)
    router.put('/message/:id',putMethod)
    router.delete('/message/:id',deleteMethod)

module.exports = router