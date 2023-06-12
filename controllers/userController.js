const Users = require('../models/users');

    const getMethod=async(req,res)=>{
        try{
            const users = await Users.find({});
            res.status(200).json(users)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }
    const postMethod=async(req,res)=>{
        try{
            const users = await Users.create(req.body)
            res.status(200).json(users)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    getMethod,
    postMethod
}