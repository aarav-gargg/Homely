import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            console.log(name);
            console.log(password);
            console.log(email);
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // const profileImg = req.file;
        // if (!profileImg) {
        //     profileImg = path.join(__dirname, '..', 'public', 'userprofile.jpg');
        // }
        // const profileImgPath = profileImg.path;

        const exist = await User.findOne({ email });
        if (exist) {
            return next(errorHandler(409,"User Already Exists!"))
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(200).json({
            message: "USER CREATED SUCCESSFULLY",
            user: newUser,
        });
    } catch (error) {
        return next(errorHandler(404,"User Not Found"))
    }
}

export const login= async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        const exist = await User.findOne({ email });

        if(!exist){
            return next(errorHandler(409,"User Does Not Exist!"))
        }
        else{
            const validPass=bcryptjs.compareSync(password,exist.password);

        if(!validPass){
            return next(errorHandler(409,"Password Invalid!"))
        }

        else{
            const token=jwt.sign({id:exist._id},process.env.JWT_SECRET);
            const user=exist._doc;

        res.status(200).json({
            message:"login success",
            token,
            user
        });
        }
        }

    } catch (error) {
        return next(errorHandler(404,"User Not Found"))
    }
}