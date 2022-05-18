const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({});

const Product = mongoose.model("Product", prouductSchema);

module.exports = Product;
