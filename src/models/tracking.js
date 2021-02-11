const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  time: { type: String, required: true },
  distance: { type: Number, required: true },
  speed: { type: Number, required: true },
  startPoint: { type: Number, required: true },
  endPoint: { type: Number, required: true },
  createdAAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tracking", trackingSchema);
