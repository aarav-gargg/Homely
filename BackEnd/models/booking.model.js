import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserData"
    },
    hostId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserData"
    },
    propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"HostingData"
    },
    startDate:{
        type : String,
        required:true
    },
    endDate:{
        type : String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    }
},{timestamps:true})

const BookingSchema = mongoose.model("BookingData",bookingSchema);

export default BookingSchema;