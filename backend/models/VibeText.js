const mongoose = require("mongoose");

const { Schema } = mongoose;

const VibeText = new Schema({});

const vibeText = mongoose.model("vibeText", vibeTextSchema);

module.exports = VibeText;
