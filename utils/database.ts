import mongoose from "mongoose";

let isConnected = false

export const connectDB = async ()=> {
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('MongoDB already connected')
        return;
    }
    try{
        await mongoose.connect(
            process.env.MONGODB_URI as string,
            {
                dbName:"friendsnklench",
            }
        )
        isConnected= true
        console.log('MongoDB connected')

    }
    catch(err){
        console.error(err)
    } 
}