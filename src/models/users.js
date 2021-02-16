const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Email can't be shorter than 5 character"],
  },
  name: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
  },
  gender: {
    type: String,
    default: 0,
  },
  images: {
    type: String,
    default: 0,
  },
  intensity: {
    type: Number,
    default: 0,
  },
  salt: {
    type: String,
    required: true,
  },
  cretedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = function UsersModel() {
  return mongoose.model("users", usersSchema);
};
