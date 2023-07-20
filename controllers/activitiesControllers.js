const Activities = require('../models/activitiesModel')

    //add 
    const postMethod = async(req,res)=>{
        try{
            const act = await Activities.create(req.body)
            res.status(200).json(act)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

    //get all
    const getMethod = async(req,res)=>{
        try{
            const act = await Activities.find();
            res.status(200).json(act)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //edit
    const putMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const act = await Activities.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})//'runValidators' to run the validation in our model components

                //cant find the act in db 
                if(!act){
                    return res.status(404).json({message: `cannot find`})
                }
                
            const updatedAct = await Activities.findById(id)
            res.status(200).json(updatedAct);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //delete
    const deleteMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const act = await Activities.findByIdAndDelete(id)
                //cant find the act in db 
                if(!act){
                    return res.status(404).json({message: `cannot find any act with ID of ${id}`})
                }
                res.status(200).json(act);
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