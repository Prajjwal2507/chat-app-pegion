import jwt from 'jsonwebtoken';
import { ENV } from '../lib/env.js';
import User from '../models/User.js';
 

export const protectRoute = async (req , res , next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({message:"Unauthorized - No token provided"});

        const decode = jwt.verify(token , ENV.JWT_SECRET);
        if(!decode ) return res.status(401).json({message:"Unauthorized - Invalid token provided"});

        const user = await User.findById(decode.userId).select("-password");
        if(!user) return res.status(404).json({message : "User not Fount"});

         
        req.user = user; 
        next();
    } catch (error) {
        console.log("ERROR in protectRoute middleware : ", error ) ;
        res.status(500).json({message : "Internal server error"});
    } 
};
