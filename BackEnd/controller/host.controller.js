import Host from "../models/host.model.js";
import {errorHandler} from "../utils/error.js"


export const hostProperty = async (req, res, next) => {
    try {
        const { creator, category, type, address, city, state, zip, bedrooms, beds, bathrooms, guests, facilities, title, description, price } = req.body;

        const photos = req.fles;

        if(!photos){
            next(errorHandler(400 , "No files Uploaded"));
        }

        const photoPaths = photos.map((file) => file.path);

        const hostedProperty = new Host({
            creator, category, type, address, city, state, zip, bedrooms, beds, bathrooms, guests, facilities, title, description, price
        })

        await hostedProperty.save();

        res.status(201).json(hostedProperty);



    } catch (error) {
        next(error);
    }

}