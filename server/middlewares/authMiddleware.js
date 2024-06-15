import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

// protected Routes token base

export const requiredSingIn = async (req, res, next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization , process.env.JWT_SECRET);
        req.user = decode;

        next();
    } catch (error) {
        console.log(error)
    }
}
// jai shree ram 
try {
    
} catch (error) {
    
}

// admin access
export const isAdmin = async (req, res, next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== "admin"){
            return res.status(401).send({
                success:false,
                message: "UnAuthoriserd Access",
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

