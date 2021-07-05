const express = require("express");

const facultyController = require("../controllers/facultyController");

const router = express.Router();

router.post("/uploadTT", facultyController.uploadTT);

module.exports = router;
