const express = require('express')
const {getMethod,postMethod,putMethod,putMethodUser} = require('../controllers/userController')
const router = express.Router()
const multer  = require('multer')

    // Define the storage engine and destination for uploaded files
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder for uploads
        },
        filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`); // Set the file name
        },
    });

    // Create the multer upload instance
    const upload = multer({ storage });

//user routes
    //get all users
        router.get('/users',getMethod)
    //add user
        router.post('/users',postMethod)
    //edit user img
        router.put('/user/img/:id',upload.single('img'),putMethod)
    //edit user
        router.put('/user/:id',putMethodUser)

module.exports = router