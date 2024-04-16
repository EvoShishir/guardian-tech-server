const express = require("express");
const {
  createUser,
  createContact,
  getUserContacts,
  sendEmailForHelp,
} = require("../controllers/userController");
const router = express.Router();

router.route("/create-user").post(createUser);
router.route("/contacts/create-contact").post(createContact);
router.route("/contacts/:uid").get(getUserContacts);
router.route("/help/:uid").post(sendEmailForHelp);

module.exports = router;
