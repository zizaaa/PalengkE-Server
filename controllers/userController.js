const Users = require('../models/users');

    const getMethod=async(req,res)=>{
        try{
            const users = await Users.find();
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

    //edit
    const putMethod =async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await Users.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})

                if(!user){
                    return res.status(404).json({message: `cannot find any user with ID of ${id}`})
                }
            const updatedUser = await Users.findById(id)
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    getMethod,
    postMethod,
    putMethod
}