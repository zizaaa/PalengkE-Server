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
            res.status(500).json({message:error.message})
        }
    }

    //edit img
    const putMethod = async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await Users.findByIdAndUpdate({_id:id},{img:req.file.path},{new:true,runValidators:true})
            console.log(user)
                if(!user){
                    return res.status(404).json({message: `cannot find any user with ID of ${id}`})
                }
            const updatedUser = await Users.findById(id)
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    //edit user
    const putMethodUser = async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await Users.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
            console.log(user)
                if(!user){
                    return res.status(404).json({message: `cannot find any user with ID of ${id}`})
                }
            const updatedUser = await Users.findById(id)
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const deleteMethodUser = async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await Users.findByIdAndDelete(id)

            if(!user){
                return res.status(404).json({message: `cannot find any user with ID of ${id}`})
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    getMethod,
    postMethod,
    putMethod,
    putMethodUser,
    deleteMethodUser
}