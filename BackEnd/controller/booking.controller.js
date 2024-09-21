import BookingSchema from "../models/booking.model.js"
import User from "../models/user.model.js"

export const createBooking = async (req, res, next) => {
    try {
        const { customerId, hostId, propertyId, startDate, endDate, totalPrice } = req.body;

        const booking = new BookingSchema({
            customerId, hostId, propertyId, startDate, endDate, totalPrice
        })

        await booking.save();

        User.updateOne(
            { _id: customerId }, 
            {
                $push: {
                    tripList: {
                        hostId: hostId,
                        propertyId: propertyId,
                        startDate: startDate,
                        endDate: endDate,
                        totalPrice: totalPrice
                    }
                }
            }
        )
            .then((result) => {
                console.log('Update Result:', result);

                if (result.nModified === 0) {
                    return res.status(404).json({ message: 'User not found or no changes made.' });
                }

            })

        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }

}