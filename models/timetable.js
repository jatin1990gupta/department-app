const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timetableSchema = new Schema(
  {
    ttOf: {
      type: String,
      required: true,
    },
    ttLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TimeTable", timetableSchema);
