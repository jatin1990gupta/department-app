const express = require("express");

const { fetchTT } = require("../controllers/indexController");

const router = express.Router();

router.post("/fetchTT", fetchTT);

module.exports = router;
