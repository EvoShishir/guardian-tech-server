const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  imgLink: {
    type: String,
    unique: true,
  },
  cases: {
    type: Number,
    default: 0,
  },
});

const Area = mongoose.model("Area", areaSchema);
exports.Area = Area;
