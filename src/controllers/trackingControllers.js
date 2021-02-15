//Dependencies
const trackingModel = require("../models/tracking");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

module.exports = {
  insert: async (req, res) => {
    try {
      //Get data from body
      const { body } = req;
      const authenticate = req.headers.authorization;

      //Check token value
      const verified = jwt.verify(authenticate, secretKey);

      //Make new data
      const trackingData = { ...body, user: verified.email };

      //Insert new data to database
      const data = await trackingModel.create(trackingData);
      res.status(200).json({ message: "succes insert data", data });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};
