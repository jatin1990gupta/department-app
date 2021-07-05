const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox68ed3143e76347b2a796e7335d2f16d7.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAILGUN_API, domain: DOMAIN });

const Student = require("../models/student");
const Faculty = require("../models/faculty");

exports.studentLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    await Student.findOne({ email: email }, async (err, student) => {
      if (err) {
        throw err;
      } else {
        if (!student) {
          res.status(404).json({
            msg: "Student not found!",
          });
        } else {
          await bcrypt.compare(
            password,
            student.password,
            async (err, doMatch) => {
              if (err) throw err;
              else {
                if (!doMatch) {
                  res.status(422).json({
                    msg: "Password Mismatch",
                  });
                } else {
                  const token = jwt.sign(
                    {
                      email: email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                  );

                  console.log(student);

                  res.status(200).json({
                    name: student.name,
                    email: student.email,
                    role: "student",
                    accessToken: token,
                    refreshToken: token,
                  });
                }
              }
            }
          );
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

exports.studentSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    await Student.findOne({ email: email }, async (err, studentResult) => {
      if (err) {
        throw err;
      } else {
        if (studentResult) {
          return res.status(400).json({
            msg: "Student Already Exist!",
          });
        }
        bcrypt.hash(password, 12, async (err, hashPw) => {
          if (err) throw err;
          else {
            const student = new Student({
              name: name,
              email: email,
              password: hashPw,
            });

            await student.save((err) => {
              if (err) throw err;
              else {
                res.status(201).json({
                  msg: "Student Created Successfully.",
                  data: student,
                });
              }
            });
          }
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

exports.resetLink = async (req, res, next) => {
  try {
    const { email } = req.body;

    const token = crypto.randomBytes(16).toString("hex");

    await Student.findOne({ email: email }, async (err, stuRes) => {
      if (err) throw err;
      else {
        if (stuRes) {
          stuRes.resetToken = token;
          stuRes.expireToken = Date.now() + 3600000;
          await stuRes.save((err) => {
            if (err) throw err;
            else {
              const data = {
                from: "noreply@oriental.com",
                to: email,
                subject: "Oriental - Password recovery",
                html: `
                    <p>Hello, student.</p>
                    <p>To change the password click <a href="http://localhost:3000/setPassword/${token}">http://localhost:3000/setPassword/${token}</a></p>
                    <p>Oriental College of technology</p>
                  `,
              };

              mg.messages().send(data, (err, body) => {
                if (err) throw err;
                else {
                  console.log(body);
                  console.log("Reset link sent");
                  res.status(200).json({
                    msg: "Reset link sent",
                  });
                }
              });
            }
          });
        } else {
          res.status(404).json({
            msg: "User doesn't exist",
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

exports.setPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    await Student.findOne(
      { resetToken: token, expireToken: { $gt: Date.now() } },
      async (err, stuRes) => {
        if (err) throw err;
        else {
          bcrypt.hash(password, 12, async (err, hashPw) => {
            if (err) throw err;
            else {
              stuRes.password = hashPw;
              stuRes.resetToken = undefined;
              stuRes.expireToken = undefined;
              await stuRes.save((err) => {
                if (err) throw err;
                else {
                  res.status(201).json({
                    msg: "Password Changed.",
                  });
                }
              });
            }
          });
        }
      }
    );
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// faculty section

exports.facultyLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    await Faculty.findOne({ email: email }, async (err, faculty) => {
      if (err) {
        throw err;
      } else {
        if (!faculty) {
          res.status(404).json({
            msg: "Faculty not found!",
          });
        } else {
          await bcrypt.compare(
            password,
            faculty.password,
            async (err, doMatch) => {
              if (err) throw err;
              else {
                if (!doMatch) {
                  res.status(422).json({
                    msg: "Password Mismatch",
                  });
                } else {
                  const token = jwt.sign(
                    {
                      email: email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                  );

                  res.status(200).json({
                    msg: "SignIn Successful.",
                    data: faculty,
                    token: token,
                    expiresIn: 3600,
                    loginAs: "faculty",
                  });
                }
              }
            }
          );
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

exports.facultySignup = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await Faculty.findOne({ email: email }, async (err, facultyResult) => {
      if (err) {
        throw err;
      } else {
        if (facultyResult) {
          res.status(400).json({
            msg: "Faculty Already Exist!",
          });
        } else {
          bcrypt.hash(password, 12, async (err, hashPw) => {
            if (err) throw err;
            else {
              const faculty = new Faculty({
                name: name,
                email: email,
                password: hashPw,
              });

              await faculty.save((err) => {
                if (err) throw err;
                else {
                  res.status(201).json({
                    msg: "Faculty Created Successfully.",
                    data: faculty,
                  });
                }
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
