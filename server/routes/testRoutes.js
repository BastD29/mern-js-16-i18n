const express = require("express");
const router = express.Router();
const { getTests, createTests } = require("../controllers/testController");

router.get("/", getTests);
router.post("/", createTests);

module.exports = router;
