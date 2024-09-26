import BookingSchema from "../models/booking.model.js"
import Host from "../models/host.model.js";
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

export const getTripList = async (req,res,next) => {
    try {
        const {userId} = req.params;

        const trips = await BookingSchema.find({customerId: userId}).populate("customerId hostId propertyId");

        if(!trips) return next(errorHandler("404" , "Booking Not Found"));

        res.status(200).json(trips);
        
    } catch (error) {
        next(error);
    }
}

export const getProperty = async(req,res,next) => {
    try {
        const {propertyId} = req.params;

        const property = await Host.findById(propertyId);

        res.status(200).json(property);
    } catch (error) {
        next(error);
    }
}

export const getWishList = async (req, res, next) => {
    try {
        const { userId } = req.params; 

       
        const user = await User.findById(userId).populate('wishList'); 

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.wishList);
    } catch (error) {
        next(error);
    }
};


export const addToWishList = async (req, res, next) => {
    try {
        const { propertyId, userId } = req.params;
        console.log(propertyId)
        const property = await Host.findById(propertyId);

        if (!property) {
            
            return res.status(404).json({ message: 'Property not found' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPropertyInWishList = user.wishList.some(
            (wishlistItem) => wishlistItem._id.toString() === property._id.toString()
        );

        if (isPropertyInWishList) {
            return res.status(400).json({ message: 'Property already in wishlist' });
        }
 
        await User.updateOne(
            { _id: userId },
            { $push: { wishList: property } }  
        );

        const updatedUser = await User.findById(userId);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

export const clearWishList = async (req, res, next) => {
    try {
        const { userId } = req.body;

        
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

      
        await User.updateOne(
            { _id: userId },
            { $set: { wishList: [] } }
        );

        const updatedUser = await User.findById(userId);
        res.status(200).json({ message: 'WishList cleared', user: updatedUser });
    } catch (error) {
        next(error);
    }
};


