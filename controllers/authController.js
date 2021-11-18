const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox68ed3143e76347b2a796e7335d2f16d7.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAILGUN_API, domain: DOMAIN });

const Student = require("../models/student");
const Faculty = require("../models/faculty");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwt-helper");

exports.studentLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    await Student.findOne({ email: email }, (err, student) => {
      if (err) {
        throw err;
      } else {
        if (!student) {
          return res.status(404).json({
            statusCode: 404,
            message: "Not Found",
          });
        }
        bcrypt.compare(password, student.password, (err, doMatch) => {
          if (err) throw err;
          else {
            if (!doMatch) {
              return res.status(422).json({
                statusCode: 422,
                message: "Invalid Password",
              });
            }
            const accessToken = generateAccessToken({ email });
            const refreshToken = generateRefreshToken({ email });

            return res.status(200).json({
              statusCode: 200,
              message: "Login Successful",
              payload: {
                name: student.name,
                email: student.email,
                role: "student",
                accessToken,
                refreshToken,
              },
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

exports.studentSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    await Student.findOne({ email: email }, async (err, studentResult) => {
      if (err) {
        throw err;
      } else {
        if (studentResult) {
          return res.status(400).json({
            statusCode: 400,
            message: "Account with the email Id already exist!",
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
                  statusCode: 201,
                  message: "Signup Successful",
                  payload: student,
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
                    <p>To change the password click <a href="http://localhost:3000/#/setPassword/${token}">http://localhost:3000/setPassword/${token}</a></p>
                    <p>Oriental College of technology</p>
                  `,
              };

              mg.messages().send(data, (err, body) => {
                if (err) throw err;
                else {
                  console.log(body);
                  console.log("Reset link sent");
                  res.status(200).json({
                    statusCode: 200,
                    message: "Reset link sent",
                    payload: {},
                  });
                }
              });
            }
          });
        } else {
          res.status(404).json({
            statusCode: 404,
            message: "Not Found",
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
          if (stuRes) {
            bcrypt.hash(password, 12, async (err, hashPw) => {
              if (err) throw err;
              else {
                stuRes.password = hashPw;
                stuRes.resetToken = undefined;
                stuRes.expireToken = undefined;
                await stuRes.save((err) => {
                  if (err) throw err;
                  else {
                    res.status(200).json({
                      statusCode: 200,
                      message: "Password Changed Successfully",
                    });
                  }
                });
              }
            });
          } else {
            res.status(404).json({
              statusCode: 404,
              message: "Not Found",
            });
          }
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
          return res.status(404).json({
            statusCode: 404,
            message: "Not Found!",
          });
        }
        await bcrypt.compare(
          password,
          faculty.password,
          async (err, doMatch) => {
            if (err) throw err;
            else {
              if (!doMatch) {
                return res.status(422).json({
                  statusCode: 422,
                  message: "Invalid Password",
                });
              }
              const accessToken = generateAccessToken({ email });
              const refreshToken = generateRefreshToken({ email });

              return res.status(200).json({
                statusCode: 200,
                message: "Login Successful",
                payload: {
                  name: faculty.name,
                  email: faculty.email,
                  role: "faculty",
                  accessToken,
                  refreshToken,
                },
              });
            }
          }
        );
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
    const { name, email, password } = req.body;

    await Faculty.findOne({ email }, async (err, facultyResult) => {
      if (err) {
        throw err;
      } else {
        if (facultyResult) {
          return res.status(400).json({
            statusCode: 400,
            message: "An account with same email address already exists",
          });
        }
        bcrypt.hash(password, 12, async (err, hashPw) => {
          if (err) throw err;
          else {
            const faculty = new Faculty({
              name,
              email,
              password: hashPw,
            });

            await faculty.save((err) => {
              if (err) throw err;
              else {
                return res.status(201).json({
                  statusCode: 201,
                  message: "Signup Successful",
                  payload: faculty,
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
