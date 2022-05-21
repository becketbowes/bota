const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        sku: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        usdPrice: {
            type: Number,
            required: true,
            min: 0.99
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0
        }
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
