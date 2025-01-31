const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const DB_Connection = require("./DB_Connection/DB")
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {


    res.send("<h1>Welcome to the Job Portal API!</h1>");    
});

//Database Connection 

DB_Connection()



//Route
app.use(express.json());
app.use("/abasar/",require('./Route/userRoute.js'));

app.use("/abasar/recruiter",require('./Route/recruiterRoute'));

app.use("/abasar/job/",require('./Route/jobRoute.js'));

// app.use(cors());


//Port Listening - Start the server  - Express Server 3000
app.listen(PORT, ()=>{
    console.log(`The server is running on port : ${PORT}`);
})