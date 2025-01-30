const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;
const DB_Connection = async()=>{
    try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB : ", error);
        
    }


}

module.exports = DB_Connection;