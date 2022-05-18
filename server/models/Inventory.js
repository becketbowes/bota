const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const inventorySchema = new Schema(
    {
        product: {

        },
        quantity: {
            type: Number,
            require: true
        }
    }
);

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
