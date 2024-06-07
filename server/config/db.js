import mongoose from 'mongoose'


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To MongoDB Database ${conn.connection.host}`.blue);
    }
    catch(error){
        console.log(`Error in MongoDB ${error}`.red);
    }
}

export default connectDB;