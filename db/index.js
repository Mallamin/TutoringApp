/*

* 1. Create a connection function for mongodb
* 2. Start a local mongodb server connection
*/

const mongoose =require ("mongoose")
require ('dotenv').config()
const {MONGO_URI}=process.env
// Create the connection function
// const connectDB = ()=> {
//     mongoose.connect(MONGO_URI,{
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology:true,
//         useFindAndModify:false
//     })
//     .then(()=>{
//         console.log("MongoDb connected...")
        
//         // Seed data
//     })

//     .catch ((err)=>{
//         console.error(err.message)
//         //Exit with failure
//         process.exit(1)
//     })
//}

// Async Mongoose connection
const connectDB=async()=>{
   try {
       await mongoose.connect(MONGO_URI,{
                useNewUrlParser:true,
                useCreateIndex:true,
                useUnifiedTopology:true,
                useFindAndModify:false
            })
            console.log('MongoDb connected...');

            // Seed data

    } catch(err){
        console.error(err.message)

        //Exit with failure
        process.exit(1)
    

    
    }
}
module.exports = connectDB
