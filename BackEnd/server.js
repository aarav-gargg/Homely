import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"
import authRoutes from "./Routes/auth.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");

}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"))

app.use("/api/auth",authRoutes);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
