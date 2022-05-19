const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const inventorySchema = require('./Inventory')

const productSchema = new Schema(
    {
        sku: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        usdPrice: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        quantity: [inventorySchema]
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
