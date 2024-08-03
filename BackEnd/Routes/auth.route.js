import express from "express";
import multer from "multer";

const storage=multer.diskStorage({})

const router=express.Router();

router.port("/Resgiter",register)

export default router;