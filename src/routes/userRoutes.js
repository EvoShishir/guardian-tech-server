const express = require("express");
const {
  createUser,
  createContact,
  getUserContacts,
} = require("../controllers/userController");
const router = express.Router();

router.route("/create-user").post(createUser);
router.route("/contacts/create-contact").post(createContact);
router.route("/contacts/:uid").get(getUserContacts);

module.exports = router;
