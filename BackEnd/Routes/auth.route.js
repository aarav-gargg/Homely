import express from "express";
import multer from "multer";
import { register , login} from "../controller/auth.controller.js";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/uploads/")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

const router = express.Router();

// const upload = multer({ storage });

router.post("/Register",register)
router.post("/Login",login)

export default router;