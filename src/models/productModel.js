import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
      minLength: [3, "El nombre del producto debe tener al menos 3 caracteres"],
    },
    price: {
      type: Number,
      required: [true, "El precio del producto es obligatorio"],
      min: [0, "El precio del producto no puede ser negativo"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
