const express = require('express');
const {postHomeMethod,postMethod,getMethod,singleGetMethod,putMethod,deleteMethod} = require('../controllers/productController')
const router = express.Router();

    //product routes
        router.get('/',postHomeMethod)
    //add product
        router.post('/products', postMethod)
    //get all products
        router.get('/products',getMethod)
    //get single product by ID
        router.get('/product/:id',singleGetMethod)
    //update products
        router.put('/product/:id',putMethod)
    //delete product
        router.delete('/products/:id',deleteMethod)

module.exports = router