const TimeTable = require("../models/timetable");

exports.uploadTT = async (req, res, next) => {
  try {
    const { timeTableOf, timeTableImg } = req.body;

    await TimeTable.findOne({ ttOf: timeTableOf }, async (err, timeTable) => {
      if (err) {
        throw err;
      } else {
        if (timeTable) {
          timeTable.ttLink = timeTableImg;
          await timetable.save((err) => {
            if (err) throw err;
            else {
              res.status(200).json({
                statusCode: 200,
                message: "TimeTable Changed",
                payload: { timeTableImg },
              });
            }
          });
        } else {
          const timeTable = new TimeTable({
            ttOf: timeTableOf,
            ttLink: timeTableImg,
          });

          await timeTable.save((err) => {
            if (err) throw err;
            else {
              res.status(201).json({
                statusCode: 201,
                message: "TimeTable Uploaded",
                payload: { timeTableImg },
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

exports.addStudent = (req, res, next) => {
  try {
    const {} = req.body;
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};
