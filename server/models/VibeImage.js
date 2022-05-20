const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const vibeImageSchema = new Schema(
    {
        pageId: {
            type: String
        },
        link: {
            type: String
        },
        images: {
            type: String
        },
        alt: {
            type: String
        }
    }
);

const VibeImage = model("VibeImage", vibeImageSchema);

module.exports = VibeImage;
