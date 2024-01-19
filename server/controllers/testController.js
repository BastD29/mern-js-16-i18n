const Test = require("../models/testModel");

const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);

    if (test) {
      res.status(200).json(test);
    } else {
      res.status(404).json({ message: "Test not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTests = async (req, res) => {
  try {
    const tests = await Test.insertMany(req.body);
    res.status(201).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTests, getTestById, createTests };
