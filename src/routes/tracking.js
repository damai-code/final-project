const router = require("express").Router();
const trackingController = require("../controllers/trackingControllers");
const validateMid = require("../middlewares/tokenmid");

router.post("/tracking", validateMid.validateToken, trackingController.insert);

module.exports = router;
