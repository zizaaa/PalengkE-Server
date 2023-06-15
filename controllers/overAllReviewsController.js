const overAllReviews = require('../models/overAllReviews')

    const getMethod = async(req, res)=>{
        try {
            const reviews = await overAllReviews.find()
            res.status(200).json(reviews)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    const postMethod = async(req, res)=>{
        try {
            const reviews = await overAllReviews.create(req.body)
            res.status(200).json(reviews)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    getMethod,
    postMethod
}