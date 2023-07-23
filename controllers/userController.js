const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

    const getMethod=async(req,res)=>{
        try{
            const users = await Users.find();
            res.status(200).json(users)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }

    const logIn = async (req, res) => {
        try {
        const { userName, password } = req.body;
          // Find the user based on the provided username
        const user = await Users.findOne({ userName });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
          // Compare the provided password with the hashed password from the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
          // Check if the user's membership is "Admin"
        if (user.memberShip !== 'Admin') {
            // If the user is not an admin, do not send a token
            return res.status(200).json({ user });
        }
          // Passwords match, authentication successful
          // Generate the JWT token for admin users only
        const accessToken = jwt.sign(
                {
                user: {
                    userName: user.userName,
                    email: user.email,
                    id: user.id,
                },
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                expiresIn: '1d',
                }
        );
          // Send the token and user data as a response
            res.status(200).json({ user, accessToken });
        }catch (error) {
            console.error('Login error:', error); 
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    };
    
    // const postMethod=async(req,res)=>{
    //     try{
    //         const users = await Users.create(req.body)
    //         res.status(200).json(users)
    //     }catch(error){
    //         res.status(500).json({message:error.message})
    //     }
    // }
    const postMethod = async (req, res) => {
        try {
            // Get the password from the request body
            const { password } = req.body;
    
            // Hash the password using bcrypt
            const saltRounds = 10; // Number of salt rounds to use (10 is recommended)
            const hashedPassword = await bcrypt.hash(password, saltRounds);
    
            // Save the hashed password to the user object
            const user = { ...req.body, password: hashedPassword };
    
            // Save the user object with the hashed password to the database (assuming you are using a model called "Users")
            const createdUser = await Users.create(user);
    
            res.status(200).json(createdUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
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
    // const putMethodUser = async(req,res)=>{
    //     try {
    //         const {id} = req.params;
            
    //         const user = await Users.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
    //         console.log(user)
    //             if(!user){
    //                 return res.status(404).json({message: `cannot find any user with ID of ${id}`})
    //             }
    //         const updatedUser = await Users.findById(id)
    //         res.status(200).json(updatedUser);
    //     } catch (error) {
    //         res.status(500).json({message:error.message})
    //     }
    // }
    // const putMethodUser = async (req, res) => {
    //         try {
    //             const { id } = req.params;
    //             const { password, ...userData } = req.body; // Exclude the password from the userData object
        
    //             // If the password is being updated, hash it
    //             if (password) {
    //                 userData.password = await bcrypt.hash(password, 10);
    //             }
        
    //             // Find the existing user in the database
    //             const existingUser = await Users.findById(id);
    //             if (!existingUser) {
    //                 return res.status(404).json({ message: `Cannot find any user with ID of ${id}` });
    //             }
        
    //             // Merge the existing user data with the updated user data
    //             const updatedUser = { ...existingUser._doc, ...userData };
            
    //             // Save the updated user data, and handle validation if necessary
    //             Object.keys(userData).forEach((key) => {
    //                 existingUser[key] = updatedUser[key];
    //             });
            
    //             await existingUser.save();
            
    //             res.status(200).json(existingUser);
    //         } catch (error) {
    //             res.status(500).json({ message: error.message });
    //         }
    // };
    const putMethodUser = async (req, res) => {
        try {
          const { id } = req.params;
          const { password, ...userData } = req.body; // Exclude the password from the userData object
      
          // If the password is being updated, hash it
          if (password) {
            userData.password = await bcrypt.hash(password, 10);
          }
      
          // Find the existing user in the database
          const existingUser = await Users.findById(id);
          if (!existingUser) {
            return res.status(404).json({ message: `Cannot find any user with ID of ${id}` });
          }
      
          // Update the user data in the database
          await Users.updateOne({ _id: id }, userData);
      
          // Fetch the updated user data from the database
          const updatedUser = await Users.findById(id);
      
          res.status(200).json(updatedUser);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };

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
    deleteMethodUser,
    logIn
}