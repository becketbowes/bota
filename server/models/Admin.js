const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt")

const adminSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 10
        }
    }
);

// set up pre-save middleware to create password
adminSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
  });
  
  // compare the incoming password with the hashed password
  adminSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const Admin = model("Admin", adminSchema);

module.exports = Admin