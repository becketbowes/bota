const mongoose = require("mongoose");

const { Schema } = mongoose;

const invetorySchema = new Schema({
  sku: {
    type: String,
    require: true,
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: {
    type: Number,
    default: 0,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
