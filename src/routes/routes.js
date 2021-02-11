const router = require("express").Router();
const registerControllers = require("../controllers/registerControllers");

module.exports = function routes() {
  router.use("/register", registerControllers());
  return router;
};
