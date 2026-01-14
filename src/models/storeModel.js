import { Schema } from "mongoose";
import mongoose from "mongoose";

const storeSchema = new Schema(
    {
        name:
        {
            type: String,
            required: true
        },

        address:
        {
            type: String,
            required: true
        },

        phone: {
            type: Number,
            min: [1, "El numero del producto no puede ser negativo"],
            minLength: [9],
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
        ]

    },
    {
        timestamps: true,
    }
);


const Store = mongoose.model("Store", storeSchema);

export default Store;