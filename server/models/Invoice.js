const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat')

const invoiceSchema = new Schema(
    {
        items: [
            {
                productId: {
                    type: String
                },
                name: String,
                quantity: {
                    type: Number,
                    require: true,
                    min: [1, 'Quantity cannot be less than 1!']
                }
            }
        ],
        date: {
            type: Date,
            default: Date.now,
            get: (createdAtVal => dateFormat(createdAtVal))
        },
        total: {
            type: Number,
            require: true,
            default: 0
        }
    }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
