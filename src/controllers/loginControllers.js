const UsersModel = require("../models/users")();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRETKEY;

module.exports = {
  login: async (req, res) => {
    let statusCode = 500;

    try {
      const email = req.body.email;
      const password = req.body.password;
      const users = await UsersModel.findOne({ email: email });
      console.log(users);
      //Validasi Email
      if (!users) {
        statusCode = 404;
        throw new Error("Cannot Find Users");
      }
      const isPasswordMatch = await bcrypt.compare(password, users.password);

      //Validasi Password
      if (!isPasswordMatch) {
        statusCode = 400;
        throw new Error("Invalid Password");
      }
      //Buat JWT Token
      const token = jwt.sign(
        { email: users.email, gender: users.gender },
        secretKey
      );

      res.json({
        message: "success login",
        data: {
          token: token,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(statusCode).json({ message: error.message });
    }
  },
};
