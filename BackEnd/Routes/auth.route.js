import express from "express";
import multer from "multer";
import { register } from "../controller/auth.controller";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const router = express.Router();

const upload = multer({ storage });

router.post("/Resgiter",upload.single("profile"),register)

export default router;