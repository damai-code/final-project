const trackingModel = require("../models/tracking");

module.exports = {
  insert: async (req, res) => {
    try {
      const { body } = req;

      const data = await trackingModel.create(body);
      res.status(200).json({ message: "succes insert data", data });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};
