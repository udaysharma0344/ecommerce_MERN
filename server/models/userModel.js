import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
        trim:true,
    },
    email:{
        type:String,
        unique: true, 
        required: true,
        },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        unique:true,
        required: true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum : ['customer' , 'admin'],
        default: 'customer',
    },
},{timestamps:true});

export default mongoose.model('users',userSchema)