    //require('dotenv').config({path : "./env"})

    import dotenv from 'dotenv'

    dotenv.config({
        path : "./.env"
    })

    import mongoose from 'mongoose'

    import { DB_NAME } from "./constants.js"

    import connectDB from "./db/index.js"

    connectDB()
    .then(()=>{
        app.listen(process.env.PORT||8000,()=>{
            console.log(`app is listening on port: ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.log("MONGODB connection failed: !",err)
        throw(err)
    })

    import express from "express"

const app = express()







    /*
    ;(async () => {
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",()=>{
                console.log("error",error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`app is listening on port ${process.env.PORT}`)
            })
        }catch(errro){
            console.log("ERROR: ",error)
            throw error
        }
    })()*/