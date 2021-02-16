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
    minlength: [5, "Password can't be shorter than 5 character"],
  },
  name: {
    type: String,
    required: true,
    maxlength: 25,
  },
  gender: {
    type: String,
    default: 0,
    enum: ["male", "female"],
  },
  intensity: {
    type: Number,
    default: 0,
    enum: [1, 2, 3],
  },
  images: {
    type: String,
    default: 0,
  },
  roles: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  salt: {
    type: String,
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
