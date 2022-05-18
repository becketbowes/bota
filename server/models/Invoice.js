const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const invoiceSchema = new Schema(
    {

    }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
