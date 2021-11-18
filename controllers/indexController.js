const TimeTable = require("../models/timetable");

exports.fetchTT = async (req, res, next) => {
  try {
    const { timeTableOf } = req.body;

    await TimeTable.findOne({ ttOf: timeTableOf }, async (err, timeTable) => {
      if (err) throw err;
      else {
        if (timeTable) {
          return res.status(200).json({
            statusCode: 200,
            message: "Fetch TimeTable Successful",
            payload: { timeTableImg: timeTable.ttLink },
          });
        }
        return res.status(404).json({
          statusCode: 404,
          message: "Not Found",
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
