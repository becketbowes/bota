const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const inventorySchema = new Schema(
    {

    }
);

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
