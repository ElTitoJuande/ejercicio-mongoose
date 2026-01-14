import express from "express";
import { getAllStores } from "../controllers/storeController.js";

const storeRoutes = express.Router();

storeRoutes.get("/", getAllStores);

export default storeRoutes;