import Host from "../models/host.model.js";
import {errorHandler} from "../utils/error.js"


export const hostProperty = async (req, res, next) => {
    try {
        const { creator, category, type, address, city, country, state, zip, bedrooms, beds, bathrooms, guests, facilities, title, description, price } = req.body;

        const photos = req.files;

        if(!photos){
            next(errorHandler(400 , "No files Uploaded"));
            return;
        }

        const photoPaths = photos.map((file) => file.path);

        const hostedProperty = new Host({
            creator, category, type, address, city, state, zip, bedrooms, country, beds, bathrooms, guests, facilities, title, description, price , photoPaths
        })

        await hostedProperty.save();

        res.status(201).json(hostedProperty);



    } catch (error) {
        next(error);
    }

}

export const getProperties = async (req,res,next)=>{
    try {
        const category = req.query.category;
        let properties;
        if(category){
            properties = await Host.find({ category : category}).populate({
                path: 'creator',
                select: 'name email'
            });
        }
        else{
            properties = await Host.find().populate({
                path: 'creator',
                select: 'name email'
            })
        }
        res.status(200).json(properties);
    } catch (error) {
        next(error);
    }
}