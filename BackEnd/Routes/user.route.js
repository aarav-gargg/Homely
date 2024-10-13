import express from "express";
import { getTripList , getProperty , addToWishList , deleteFromWishList , getWishList , addToPropertyList , clear} from "../controller/user.controller.js";

const router = express.Router();

router.get("/:userId/trips" , getTripList);
router.get("/property/:propertyId",getProperty)
router.get("/wishList/:userId/:propertyId",addToWishList)
router.get("/:userId/wishList",getWishList)
router.patch("/wishlist/delete/:userId/:propertyId" , deleteFromWishList)
router.get("/propertyList/:userId" , addToPropertyList)
router.get("/clear/:userId",clear);

export default router;