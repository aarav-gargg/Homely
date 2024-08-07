import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import path from "path"

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
            return res.status(409).json({ message: "User Already exists" });
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
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}