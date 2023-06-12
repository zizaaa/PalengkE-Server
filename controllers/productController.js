const Products = require('../models/product')

    const postHomeMethod = async(req,res)=>{
        res.send('Welcome to PalengkE!!');
    }

    //add product
    const postMethod = async(req,res)=>{
        try{
            const products = await Products.create(req.body)
            res.status(200).json(products)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    }

    //get all products
    const getMethod = async(req,res)=>{
        try{
            const products = await Products.find();
            res.status(200).json(products)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //get single product
    const singleGetMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const product = await Products.findById(id);
                if(!product){
                    return res.status(404).json(`No product with the id of ${id}`)
                }
            res.status(200).json(product)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //edit product
    const putMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const product = await Products.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})//'runValidators' to run the validation in our model components

                //cant find the product in db 
                if(!product){
                    return res.status(404).json({message: `cannot find any product with ID of ${id}`})
                }
                
            const updatedProduct = await Products.findById(id)
            res.status(200).json(updatedProduct);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    //delete product
    const deleteMethod = async(req,res)=>{
        try{
            const {id} = req.params;
            const product = await Products.findByIdAndDelete(id)
                //cant find the product in db 
                if(!product){
                    return res.status(404).json({message: `cannot find any product with ID of ${id}`})
                }
                res.status(200).json(product);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    postHomeMethod,
    postMethod,
    getMethod,
    singleGetMethod,
    putMethod,
    deleteMethod
}