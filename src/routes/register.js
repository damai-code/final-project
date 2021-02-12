const router = require("express").Router();
const registerControllers = require("../controllers/registerControllers");

//coba read heroku deploy
router.get("/", (req, res) => res.send("<h1>Sportsman Homepage</h1>"));

router.post("/register", registerControllers.register);

module.exports = router;
