const express = require("express");
const {
  getAllAreas,
  createArea,
  createSubArea,
  getSubArea,
} = require("../controllers/areaController");
const router = express.Router();

router.route("/create").post(createArea);
router.route("/all").get(getAllAreas);

router.route("/create-sub-area").post(createSubArea);
router.route("/:areaName").get(getSubArea);

module.exports = router;
