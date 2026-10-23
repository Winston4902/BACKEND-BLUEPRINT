import mongoose from "mongoose"

import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
    try{
        connectionInstance = await mongoose.connect(`${process.env.DB_NAME}/${DB_NAME}`)
        
    }catch(error){
        console.log("MONOGDB CONNECTION ERROR: ",error)
        throw(error)
    }
}


export default connectDB