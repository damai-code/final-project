const router = require("express").Router();

router.post("/tracking", (req, res) => {
  res.send("hello");
});

module.exports = router;
