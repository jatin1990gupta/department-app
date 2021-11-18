const jwt = require("jsonwebtoken");
const { jwtToken } = require("../config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    token = token.split(" ")[1];

    jwt.verify(token, jwtToken, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Unauthorized Access",
        });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
