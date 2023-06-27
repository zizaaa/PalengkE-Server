const express = require('express')
const {getMethod,postMethod} = require('../controllers/messageController')
const router = express.Router()

    router.get('/messages',getMethod)
    router.post('/messages',postMethod)

module.exports = router