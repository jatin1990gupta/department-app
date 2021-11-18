const express = require("express");

const { uploadTT } = require("../controllers/facultyController");

const router = express.Router();

router.post("/uploadTT", uploadTT);

module.exports = router;
