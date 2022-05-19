const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const inventorySchema = require('./Inventory')

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
        image: {
            type: String,
            require: true
        },
        imageAlt: {
            type: String,
            require: true
        },
        quantity: [inventorySchema]
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
