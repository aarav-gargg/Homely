import BookingSchema from "../models/booking.model.js";
import User from "../models/user.model.js";
import Host from "../models/user.model.js";

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
                message: `Property is already booked from ${previousBookings[0].startDate.toISOString().slice(0, 10)} to ${previousBookings[0].endDate.toISOString().slice(0, 10)}`
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

        const update = await User.updateOne(
            { _id: hostId },
            {
                $push: {
                    reservationList: {
                        customerId: customerId,
                        propertyId: propertyId,
                        startDate: newStartDate,
                        endDate: newEndDate,
                        totalPrice: totalPrice
                    }
                }
            }
        );

        if (result.matchedCount === 0 || update.matchedCount === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (result.modifiedCount === 0 || update.modifiedCount === 0) {
            return res.status(304).json({ message: 'No changes were made to the user data.' });
        }

        res.status(200).json(booking);

    } catch (error) {
        next(error);
    }
};
