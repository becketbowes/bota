const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        sku: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        imageAlt: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        usdPrice: {
            type: Number,
            require: true
        }
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
