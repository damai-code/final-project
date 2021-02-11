const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  time: { type: String, required: true },
  speed: { type: Number, required: true },
  distance: { type: Number, required: true },
  startPoint: {},
  endPoint: {},
  createdAAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
