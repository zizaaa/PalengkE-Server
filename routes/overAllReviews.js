const express = require('express')
const {postMethod,getMethod} = require('../controllers/overAllReviewsController')
const router = express.Router()

//reviews route
    //add reviews
    router.post('/overAllReviews',postMethod)
    //get all reviews
    router.get('/overAllReviews',getMethod)

module.exports = router