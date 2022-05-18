const mongoose = require("mongoose");

const { Schema } = mongoose;

const VibeImage = new Schema({});

const vibeImage = mongoose.model("vibeImage", vibeImageSchema);

module.exports = VibeImage;
