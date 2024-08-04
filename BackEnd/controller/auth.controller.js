import User from "../models/user.model.js"

export const register = async(req,res,next)=>{
    try {
        const {name,email,password}=req.body;

        const profileImg=req.file;

        if(!profileImg){
            return res.status(400).send("NO FILE UPLOADED")
        }
        const profileImgPath=profileImg.path;

        const exist=await User.findOne({email});
        if(exist){
            return res.status(409).json({message:"User Already exists"})
        }

        
    } catch (error) {
        console.log(error);
        
    }
}