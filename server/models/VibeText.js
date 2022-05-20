const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const vibeTextSchema = new Schema(
    {
        pageId: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
);

const VibeText = model("VibeText", vibeTextSchema);

module.exports = VibeText;
