const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userUid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
exports.Contact = Contact;
