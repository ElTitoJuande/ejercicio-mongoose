import express from "express";
import {
    getAllStores,
    getOneStore,
    createStore,
    updateStore,
    deleteStore,
} from "../controllers/storeController.js";

const storeRoutes = express.Router();

storeRoutes.get("/", getAllStores);
storeRoutes.get("/:id", getOneStore);
storeRoutes.post("/", createStore);
storeRoutes.put("/:id", updateStore);
storeRoutes.delete("/:id", deleteStore);

export default storeRoutes;