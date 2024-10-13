import express from "express";
import { getTripList , getProperty , addToWishList , deleteFromWishList , getWishList , addToPropertyList , clear , getPropertyList} from "../controller/user.controller.js";

const router = express.Router();

router.get("/:userId/trips" , getTripList);
router.get("/property/:propertyId",getProperty)
router.get("/wishList/:userId/:propertyId",addToWishList)
router.get("/:userId/wishList",getWishList)
router.patch("/wishlist/delete/:userId/:propertyId" , deleteFromWishList)
router.get("/propertyList/:userId" , addToPropertyList)
router.get("/properties/:userId", getPropertyList )
router.delete("/clear/:userId",clear);

export default router;