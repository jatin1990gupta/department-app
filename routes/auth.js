const express = require("express");

const authController = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

router.post("/studentLogin", authController.studentLogin);
router.post("/studentSignup", authController.studentSignup);
router.post("/resetLink", authController.resetLink);
router.post("/setPassword", authController.setPassword);

router.post("/facultyLogin", authController.facultyLogin);
router.post("/facultySignup", authController.facultySignup);

module.exports = router;
