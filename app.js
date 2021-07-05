const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const facultyRoutes = require("./routes/faculty");
const studentRoutes = require("./routes/student");

const port = process.env.PORT || 5000;

const initMongoServer = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected.");
};

const app = express();

app.use(cors());
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({
    msg: "All okay.",
  });
});

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/faculty", facultyRoutes);
app.use("/student", studentRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
  initMongoServer();
});
