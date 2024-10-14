import BookingSchema from "../models/booking.model.js"
import User from "../models/user.model.js"
import Host from "../models/user.model.js"

export const createBooking = async (req, res, next) => {
    try {
        const { customerId, hostId, propertyId, startDate, endDate, totalPrice } = req.body;

        
        if (hostId == customerId) {
            return res.status(409).json({ message: "You cannot book your own property" });
        }

        
        const newStartDate = new Date(startDate);
        const newEndDate = new Date(endDate);

    
        const previousBookings = await BookingSchema.find({
            propertyId: propertyId,
            $or: [
                { startDate: { $lt: newEndDate, $gte: newStartDate } },
                { endDate: { $gt: newStartDate, $lte: newEndDate } }, 
                { startDate: { $lte: newStartDate }, endDate: { $gte: newEndDate } } 
            ]
        });

       
        if (previousBookings.length > 0) {
            return res.status(400).json({ 
                message: "booked already"
            });
        }

       
        const booking = new BookingSchema({
            customerId, hostId, propertyId, startDate: newStartDate, endDate: newEndDate, totalPrice
        });

        await booking.save();

       
        const result = await User.updateOne(
            { _id: customerId },
            {
                $push: {
                    tripList: {
                        hostId: hostId,
                        propertyId: propertyId,
                        startDate: newStartDate,
                        endDate: newEndDate,
                        totalPrice: totalPrice
                    }
                }
            }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ message: 'User not found or no changes made.' });
        }

        res.status(200).json(booking);

    } catch (error) {
        next(error);
    }
};
