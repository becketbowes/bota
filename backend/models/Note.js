const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  writerName: {
    type: String,
    require: True,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  read: {
    type: Boolean,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
