const { Contact } = require("../models/contactModel");
const { User } = require("../models/userModel");

const createUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    } else {
      const user = await User.create(req.body);
      res.status(201).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    next(error);
  }
};

const getUserContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ userUid: req.params.uid });
    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    next(error);
  }
};

exports.createUser = createUser;
exports.createContact = createContact;
exports.getUserContacts = getUserContacts;
