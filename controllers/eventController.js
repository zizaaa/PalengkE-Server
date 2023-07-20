const Event = require('../models/eventModel')

    //add 
    const postMethod = async(req,res)=>{
        try{
            const event = await Event.create(req.body)
            res.status(200).json(event)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

    //get all
    const getMethod = async(req,res)=>{
        try{
            const event = await Event.find();
            res.status(200).json(event)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //edit
    const putMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const event = await Event.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})//'runValidators' to run the validation in our model components

                //cant find the event in db 
                if(!event){
                    return res.status(404).json({message: `cannot find`})
                }
                
            const updatedEvent = await Event.findById(id)
            res.status(200).json(updatedEvent);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //delete
    const deleteMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const event = await Event.findByIdAndDelete(id)
                //cant find the event in db 
                if(!event){
                    return res.status(404).json({message: `cannot find any event with ID of ${id}`})
                }
                res.status(200).json(event);
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