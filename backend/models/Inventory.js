const mongoose = require("mongoose");

const { Schema } = mongoose;

const invetorySchema = new Schema({


    
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
