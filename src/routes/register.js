const router = require("express").Router();
const registerControllers = require("../controllers/registerControllers");

router.post("/register", registerControllers.register);

module.exports = router;
