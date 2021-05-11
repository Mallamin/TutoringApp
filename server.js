/*
*1. create an express server
*2. Connect to MongoDB
*3.Initialise express
*4.Initialose express middleware
*5.Create a simple get request route(optional)
*6.Inject our routes
*7.Listen to our app connection
*/

const express= require ("express");
const connectDB= require("./db");
require('dotenv').config();// Allows us to use the environmental variable in .env
const {PORT}= process.env
//Connect to DB
connectDB();
// Initialise express
const app=express();
// Initialise express middleware
app.use(express.json({extended:false}))
//Create a basic express route
app.get("./", (req, res)=> res.json({message:"Welcome to Tutoring App"}))
//PORT
const port= process.env.PORT||PORT
// Listen to connection
app.listen(port,()=> console.log(`App is running on port ${port}`))