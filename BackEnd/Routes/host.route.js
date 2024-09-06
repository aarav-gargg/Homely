import express from "express"
import multer from "multer"
import fs from "fs";
import path from "path";
import { hostProperty } from "../controller/host.controller.js";

const storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null , "public/uploads/")
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    },
})

const upload = multer({storage});
const router = express.Router();

router.post("/create" , upload.array("photos") , hostProperty);

export default router;