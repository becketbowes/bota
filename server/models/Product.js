const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        sku: {
            type: String,
            require: true
        },
        name: {
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
        },
        quantity: {
            type: Number,
            default: 0
        },
        image: {
            type: String,
            require: true
        },
        imageAlt: {
            type: String,
            require: true
        },
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
