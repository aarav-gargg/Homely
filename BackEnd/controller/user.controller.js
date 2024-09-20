import BookingSchema from "../models/booking.model.js"
import { errorHandler } from "../utils/error.js";

export const getTripList = async (req,res,next) => {
    try {
        const {userId} = req.params;

        const trips = await BookingSchema.find({customerId: userId}).populate("customerId hostId  propertyId");

        if(!trips) return next(errorHandler("404" , "Booking Not Found"));

        res.status(200).json(trips);
        
    } catch (error) {
        next(error);
    }
}