const router = require("express").Router();
const trackingController = require("../controller/tracking");

router.post("/tracking", trackingController.insert);

module.exports = router;
