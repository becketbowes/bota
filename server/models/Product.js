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
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        }
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
