const express = require("express");
const {
  getAllAreas,
  createArea,
  createSubArea,
  getSubArea,
  updateSubArea,
  updateArea,
} = require("../controllers/areaController");
const router = express.Router();

router.route("/create").post(createArea);
router.route("/all").get(getAllAreas);
router.put("/:id/report-case", updateArea);

router.route("/create-sub-area").post(createSubArea);
router.route("/:areaName").get(getSubArea);
router.put("/subarea/:id/report-case", updateSubArea);

module.exports = router;
