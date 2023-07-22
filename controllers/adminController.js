const Admin = require('../models/adminModel')

    //add
    const postMethod = async(req,res)=>{
        try{
            const admin = await Admin.create(req.body)
            res.status(200).json(admin)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

    //get alls
    const getMethod = async(req,res)=>{
        try{
            const admin = await Admin.find();
            res.status(200).json(admin)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //edit
    const putMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const admin = await Admin.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})//'runValidators' to run the validation in our model components

                //cant find the admin in db 
                if(!admin){
                    return res.status(404).json({message: `cannot find`})
                }
                
            const updatedAdmin = await Admin.findById(id)
            res.status(200).json(updatedAdmin);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //delete
    const deleteMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const admin = await Admin.findByIdAndDelete(id)
                //cant find the admin in db 
                if(!admin){
                    return res.status(404).json({message: `cannot find any admin with ID of ${id}`})
                }
                res.status(200).json(admin);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    postMethod,
    getMethod,
    putMethod,
    deleteMethod
}