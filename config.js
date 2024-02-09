const mongoose = require("mongoose")
const connect  = mongoose.connect("mongodb://127.0.0.1:27017/restaurant");


// validation for connection of database
connect.then(()=>{
    console.log("Database Connected Successfully !");
})
.catch(()=>{
    console.log("Failed to connect with Database ");
})

// create a schema 

const loginSchema = new mongoose.Schema({
     name : {
        type : String ,
        required : true 
     } , 
     password : {
        type :String , 
        required : true 
     }
})

const collection = new  mongoose.model("user"  , loginSchema)

module.exports = collection;