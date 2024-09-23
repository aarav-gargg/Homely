import express from "express";
import { getTripList , getProperty } from "../controller/user.controller.js";

const router = express.Router();

router.get("/:userId/trips" , getTripList);
router.get("/property/:propertyId",getProperty)

export default router;