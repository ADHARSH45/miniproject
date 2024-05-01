import user from '../models/usermodel.js';
import bcryptjs from 'bcryptjs';
import { errorhandler } from '../utils/error.js';

export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedpass = bcryptjs.hashSync(password,10);
    const newuser = new user({username,email,password:hashedpass});
    try{
        await newuser.save()
        res.status(210).json("user created successfully");
    }
    catch(error){
            next(error);
    }
   

}