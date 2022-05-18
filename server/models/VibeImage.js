const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const vibeImageSchema = new Schema(
    {

    }
);

const VibeImage = model("VibeImage", vibeImageSchema);

module.exports = VibeImage;
