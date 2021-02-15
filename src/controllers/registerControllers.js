const UsersModel = require("../models/users")();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRETKEY;

module.exports = {
  register: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const gender = req.body.gender;

    try {
      //saltkey level 10
      const saltKey = await bcrypt.genSalt(10);

      //cara hash password
      const hashPassword = await bcrypt.hash(password, saltKey);
      //validate email registered
      const emailRegistered = await UsersModel.findOne({ email });
      if (emailRegistered) {
        return res.status(400).json({ message: "Email is already used" });
      }
      //create usersmodel
      const users = await UsersModel.create({
        email: email,
        password: hashPassword,
        name: name,
        gender: gender,
        salt: saltKey,
      });

      const token = jwt.sign(
        { email: users.email, gender: users.gender },
        secretKey
      );
      res.json({
        message: "success register",
        data: {
          users: users,
          token: token,
        },
      });
    } catch (error) {
      res.json({ message: error });
    }
  },
};
