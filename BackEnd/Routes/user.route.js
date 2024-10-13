import express from "express";
import { getTripList , getProperty , addToWishList , deleteFromWishList , getWishList} from "../controller/user.controller.js";

const router = express.Router();

router.get("/:userId/trips" , getTripList);
router.get("/property/:propertyId",getProperty)
router.get("/wishList/:userId/:propertyId",addToWishList)
router.get("/:userId/wishList",getWishList)
router.patch("/wishlist/delete/:userId/:propertyId" , deleteFromWishList)

export default router;