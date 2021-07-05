const express = require("express");

const indexController = require("../controllers/indexController");

const router = express.Router();

router.get("/dashboard", indexController.dashboard);

router.post("/fetchTT", indexController.fetchTT);

module.exports = router;
