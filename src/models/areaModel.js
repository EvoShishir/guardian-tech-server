const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const Area = mongoose.model("Area", areaSchema);
exports.Area = Area;
