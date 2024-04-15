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
});

const SubArea = mongoose.model("SubArea", subAreaSchema);
exports.SubArea = SubArea;
