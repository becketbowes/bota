const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat')

const blogSchema = new Schema (
    {
        text: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now,
            get: (createdAtVal => dateFormat(createdAtVal))
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
)

const Blog = model("Blog", blogSchema);

module.exports = Blog