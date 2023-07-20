const Messages = require('../models/message')

    const getMethod = async(req,res)=>{
        try {
            const message = await Messages.find()
            res.status(200).json(message)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const putMethod = async(req,res)=>{
        try {
            const {id} = req.params;
            const message = await Messages.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
                if(!message){
                    return res.status(404).json({message: `cannot find any message with ID of ${id}`})
                }
            const updatedMessage = await Messages.findById(id)
            res.status(200).json(updatedMessage);
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

    const deleteMethod = async(req,res)=>{
        try {
            const {id} = req.params;
            const message = await Messages.findByIdAndDelete(id)

            if(!message){
                return res.status(404).json({message: `cannot find any message with ID of ${id}`})
            }
            res.status(200).json(message);
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    module.exports = {
        getMethod,
        postMethod,
        deleteMethod,
        putMethod
    }