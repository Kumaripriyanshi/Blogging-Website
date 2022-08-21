const mongoose=require('mongoose')
const DB_URL=process.env.DATABASE_URI
const connectToMongo=()=>{
    mongoose.connect(DB_URL,()=>{
        console.log("Succesfully connected with Database")
    })
}

module.exports=connectToMongo