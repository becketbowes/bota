const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat')

const invoiceSchema = new Schema(
    {
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        purchaseDate: {
            type: Date,
            default: Date.now,
            get: (createdAtVal => dateFormat(createdAtVal))
        },
        total: {
            type: Number,
            require: true,
            default: 0
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
