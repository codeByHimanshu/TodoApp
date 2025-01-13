const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { boolean } = require('zod')
 dotenv.config()

try {
    
    mongoose.connect(process.env.MONGO_URI)
    console.log('mongodb coneection suceesfull');
    
    
} catch (error) {
   console.log(error , "mogodb connection failed");
   
}

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean
 })

 const todo = mongoose.model('todos',todoSchema)
 module.exports={
    todo
 }