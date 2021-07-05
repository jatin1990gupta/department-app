const TimeTable = require("../models/timetable");

exports.uploadTT = async (req, res, next) => {
  try {
    const { ttOf, ttLink } = req.body;

    await TimeTable.findOne({ ttOf: ttOf }, async (err, tt) => {
      if (err) {
        throw err;
      } else {
        if (tt) {
          tt.ttLink = ttLink;
          await tt.save((err) => {
            if (err) throw err;
            else {
              res.status(200).json({
                msg: "TimeTable Changed",
              });
            }
          });
        } else {
          const tt = new TimeTable({
            ttOf: ttOf,
            ttLink: ttLink,
          });

          await tt.save((err) => {
            if (err) throw err;
            else {
              res.status(201).json({
                msg: "New TimeTable Added",
              });
            }
          });
        }
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
