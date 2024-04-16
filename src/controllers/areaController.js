const { Area } = require("../models/areaModel");
const { SubArea } = require("../models/subAreaModel");

const createArea = async (req, res, next) => {
  try {
    const area = await Area.create(req.body);
    res.status(201).json({
      success: true,
      area,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAreas = async (req, res, next) => {
  try {
    const areas = await Area.find();
    const areaArr = areas.map((area) => ({
      label: area.name.charAt(0).toUpperCase() + area.name.slice(1),
      id: area._id,
    }));
    res.status(200).json({
      success: true,
      areas,
      areaArr,
    });
  } catch (error) {
    next(error);
  }
};

const updateArea = async (req, res, next) => {
  try {
    const areaId = req.params.id;

    // Find the area by its ID and update its properties
    const area = await Area.findByIdAndUpdate(
      areaId,
      { $inc: { cases: 1 } },
      { new: true }
    );

    if (!area) {
      return res.status(404).json({ message: "Area not found." });
    }

    res.status(200).json({ success: true, area });
  } catch (error) {
    next(error);
  }
};

const createSubArea = async (req, res, next) => {
  try {
    const area = await Area.findById(req.body.area);
    if (!area) {
      return res.status(400).json({
        success: false,
        message: "Area Invalid",
      });
    }
    const subArea = await SubArea.create(req.body);
    res.status(201).json({
      success: true,
      subArea,
    });
  } catch (error) {
    next(error);
  }
};

const getSubArea = async (req, res, next) => {
  const areaName = req.params.areaName.toLowerCase();

  try {
    const area = await Area.findOne({ name: areaName });

    if (!area) {
      res.status(404).json({ message: "Area not found." });
    } else {
      const subAreas = await SubArea.find({ area: area._id }).populate("area");
      const subAreaArr = subAreas.map((subArea) => ({
        label: subArea.name.charAt(0).toUpperCase() + subArea.name.slice(1),
        id: subArea._id,
      }));
      res.status(200).json({ subAreas, subAreaArr });
    }
  } catch (error) {
    next(error);
  }
};

const updateSubArea = async (req, res, next) => {
  try {
    const subAreaId = req.params.id;
    const subArea = await SubArea.findByIdAndUpdate(
      subAreaId,
      { $inc: { cases: 1 } },
      { new: true }
    );

    if (!subArea) {
      return res.status(404).json({ message: "Subarea not found." });
    }

    res.status(200).json({ success: true, subArea });
  } catch (error) {
    next(error);
  }
};

exports.createArea = createArea;
exports.getAllAreas = getAllAreas;
exports.updateArea = updateArea;
exports.createSubArea = createSubArea;
exports.getSubArea = getSubArea;
exports.updateSubArea = updateSubArea;
