const mongoose = require("mongoose");
const dateFormat = require('../utils/dateFormat')

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    message: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    read: {
      type: Boolean,
      default: false
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
