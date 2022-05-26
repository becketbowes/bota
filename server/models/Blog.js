const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat')

const blogSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
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