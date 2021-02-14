const router = require("express").Router();
const loginControllers = require("../controllers/loginControllers");
const loginMiddleware = require("../middlewares/loginmid");

router.post("/login", loginMiddleware.loginmid, loginControllers.login);
module.exports = router;
