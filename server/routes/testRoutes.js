const express = require("express");
const router = express.Router();
const {
  getTests,
  createTests,
  getTestById,
} = require("../controllers/testController");

router.get("/", getTests);
router.get("/:id", getTestById);
router.post("/", createTests);

module.exports = router;
