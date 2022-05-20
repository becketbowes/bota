const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const vibeTextSchema = new Schema(
    {

    }
);

const VibeText = model("VibeText", vibeTextSchema);

module.exports = VibeText;
