const router = require("express").Router();
const UsersModel = require("../models/model-users")();
const bcrypt = require("bcrypt");
const app = require("../routes/app");

module.exports = function registerControllers() {
  router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const gender = req.body.gender;

    try {
      const saltKey = await bcrypt.genSalt(10);

      const hashPassword = await bcrypt.hash(password, saltKey);

      await UsersModel.create({
        email: email,
        password: hashPassword,
        name: name,
        gender: gender,
        salt: saltKey,
      });

      res.json({
        message: "success insert new users",
      });
    } catch (error) {
      console.log(error);
      res.json({ message: "error when create user" });
    }
  });
};
