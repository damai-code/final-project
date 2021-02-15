const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("./users");

const trackingSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Users,
  },
  time: { type: String, required: true },
  distance: { type: Number, required: true },
  speed: { type: Number, required: true },
  category: { type: Number, required: true },
  startPoint: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: "Point", // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  endPoint: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: "Point", // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  createdAAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tracking", trackingSchema);
