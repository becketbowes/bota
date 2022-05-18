const mongoose = require("mongoose");

const { Schema } = mongoose;

const invoiceSchema = new Schema({});

const Category = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
