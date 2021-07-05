const TimeTable = require("../models/timetable");

exports.dashboard = (req, res, next) => {
  res.status(200).json({
    msg: "Dashboard",
  });
};

exports.fetchTT = async (req, res, next) => {
  try {
    const ttOf = req.body.ttOf;
    console.log(ttOf);

    await TimeTable.findOne({ ttOf: ttOf }, async (err, tt) => {
      if (err) throw err;
      else {
        if (tt) {
          return res.status(200).json({
            msg: "TT fetched.",
            ttLink: tt.ttLink,
          });
        }
        return res.status(404).json({
          msg: "TT doesn't exists.",
        });
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
