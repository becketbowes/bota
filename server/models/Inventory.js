const { Schema } = require('mongoose');

const inventorySchema = new Schema(
    {
        quantity: {
            type: Number,
            default: 0
        }
    }
)

module.exports = inventorySchema;