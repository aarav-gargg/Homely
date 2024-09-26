import express from "express";
import { getTripList , getProperty , addToWishList , clearWishList , getWishList} from "../controller/user.controller.js";

const router = express.Router();

router.get("/:userId/trips" , getTripList);
router.get("/property/:propertyId",getProperty)
router.get("/wishList/:userId/:propertyId",addToWishList)
router.get("/:userId/wishList",getWishList)

export default router;