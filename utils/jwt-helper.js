const jwt = require("jsonwebtoken");
const { jwtToken, refreshToken } = require("../config");

exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, jwtToken, { expiresIn: "30m" });
};

exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, refreshToken, { expiresIn: "7d" });
};
