import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/userroute.js';
import authrouter from './routes/authroute.js'
import cors from 'cors';
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongodb");
})
.catch((err)=>{
    console.log(err);
});
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000,()=>{
    console.log("server running!!!");
});

app.get("/",(req,res)=>{
    res.send("server ready")
});

app.use("/api/user",userrouter);
app.use("/auth",authrouter);

app.use((err,req,res,next)=>{
    const statuscode  = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statuscode).json({
        success:false,
        statusCode:statuscode,
        message,
    });
});