const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
  },
  gender: {
    type: String,
    required: true,
  },
  images: {
    type: String,
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
