const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  Gender: String,
  salt: String,
});
module.exports = function UsersModel() {
  return mongoose.model("users", usersSchema);
};
