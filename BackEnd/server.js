import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"
import authRoutes from "./Routes/auth.route.js"
import hostRoutes from "./Routes/host.route.js"
import bookingRoutes from "./Routes/booking.route.js"
import userRoutes from "./Routes/user.route.js"

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
app.use("/api/host",hostRoutes)
app.use("/api/booking",bookingRoutes)
app.use("/api/user",userRoutes)

app.use((error,req,res,next)=>{
    const statusCode=error.statusCode || 500;
    const message=error.message || "Internal server error";

    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
