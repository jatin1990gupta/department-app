const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      const error = new Error("Can't find token");
      error.statusCode = 404;
      throw error;
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          console.log(err);
          return res.status(403).json({
            msg: "Unauthorized Access",
          });
        }
        next();
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
