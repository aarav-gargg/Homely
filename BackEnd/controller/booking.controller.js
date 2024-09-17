import BookingSchema from "../models/booking.model.js"

export const createBooking = async (req,res,next) => {
    try {
        const {customerId , hostId , propertyId , startDate , endDate , totalPrice} = req.body;

        const booking = new BookingSchema({
            customerId , hostId , propertyId , startDate , endDate , totalPrice
        })

        await booking.save();

        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }

}