import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken';

export const registerController = async (req, res)=>{
    try {
        const {name , email , password , phone , address} = req.body;

        // validations
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!phone){
            return res.send({error:'Phone is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }
        // check user
        const existingUser = await userModel.findOne({email});
        // existing user
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'Already a User, Please login',
            })
        }

        // register user
        const hashedPassword = await hashPassword(password)

        // save
        const user = new userModel({name,email , phone , address , password:hashedPassword})
        await user.save();

        res.status(201).send({
            success:true,
            message: 'User Register Successfully',
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false, 
            message: "Error in Registration",
            error
        })
    }
};





// POST Login

export const loginController = async (req,res)=>{
    try {
        // fatching email and password from user
        const {email , password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                message: "Invalid email or password"
            })
        }

        // check user
        const user =  await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                message: "Email is not registered",
                success:false
            })
        }

        // check password 
        const match = await comparePassword(password , user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message: "Invalid Password"
            })
        }

        // generating token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

        res.status(200).send({
            message:"Login Successfully",
            success:true, 
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address: user.address,
            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false, 
            message: "Error in login" , 
            error,
        })

        
    }
}



export const testController = (req,res)=>{
   try {
    res.send('Protected Routes')
   } catch (error) {
        console.log(error)
        res.send({error});
    
   }
}