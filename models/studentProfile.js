const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentProfile = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  college: String,
  degree: String,
  branch: String,
  enrollment: String,
  semester: String,
  age: String,
  dob: String,
  gender: String,
  category: String,
  father_name: String,
  mother_name: String,
  hometown: String,
  phone_number: String,
  whatsapp_number: String,
});

module.exports = mongoose.model("StudentProfile", studentProfile);
