const mongoose = require("mongoose");

const subAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
    required: true,
  },
  cases: {
    type: Number,
    default: 0,
  },
});

const SubArea = mongoose.model("SubArea", subAreaSchema);
exports.SubArea = SubArea;
