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
        {
          userId: users._id,
          name: users.name,
          gender: users.gender,
          intensity: users.intensity,
          role: users.roles,
        },
        secretKey
      );
      //Cek data gender dan intensity
      let status = false;
      if (users.gender == "0" || users.intensity == "0") {
        status = false;
      } else {
        status = true;
      }

      res.json({
        message: "success login",
        data: {
          token: token,
          status: status,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(statusCode).json({ message: error.message });
    }
  },
  updateGender: async (req, res) => {
    try {
      const { body } = req;
      const userId = res.locals.users.userId;

      //Siapkan data yang akan di update

      let updateUser = await UsersModel.findByIdAndUpdate(userId, body);

      res.status(200).json({
        message: "Success Update Gender and Intensity",
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};
