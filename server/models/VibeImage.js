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
        image: {
            type: String
        },
        imageAlt: {
            type: String
        }
    }
);

const VibeImage = model("VibeImage", vibeImageSchema);

module.exports = VibeImage;
