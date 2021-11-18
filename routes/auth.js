const express = require("express");

const {
  studentLogin,
  studentSignup,
  resetLink,
  setPassword,
  facultyLogin,
  facultySignup,
} = require("../controllers/authController");

const router = express.Router();

router.post("/studentLogin", studentLogin);
router.post("/studentSignup", studentSignup);
router.post("/resetLink", resetLink);
router.post("/setPassword", setPassword);

router.post("/facultyLogin", facultyLogin);
router.post("/facultySignup", facultySignup);

module.exports = router;
