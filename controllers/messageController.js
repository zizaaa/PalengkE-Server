const Messages = require('../models/message')

    const getMethod = async(req,res)=>{
        try {
            const message = await Messages.find()
            res.status(200).json(message)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const postMethod=async(req,res)=>{
        try{
            const message = await Messages.create(req.body)
            res.status(200).json(message)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

    module.exports = {
        getMethod,
        postMethod
    }