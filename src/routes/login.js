const router = require("express").Router();
const loginControllers = require("../controllers/loginControllers");
const loginMiddleware = require("../middlewares/loginmid");
const validateMid = require("../middlewares/tokenmid");

router.post("/login", loginMiddleware.loginmid, loginControllers.login);
router.put(
  "/login/update",
  validateMid.validateToken,
  loginControllers.updateGender
);

module.exports = router;
