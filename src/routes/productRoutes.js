import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  changeProductStock,
  deleteProduct,
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);

productRoutes.get("/:id", getOneProduct);

productRoutes.post("/", createProduct);

productRoutes.put("/:id", updateProduct);

productRoutes.patch("/:id/stock", changeProductStock);

productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
