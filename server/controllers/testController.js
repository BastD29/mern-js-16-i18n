const Test = require("../models/testModel");

const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
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

module.exports = { getTests, createTests };
