const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
