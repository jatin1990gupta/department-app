import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axios from "../../axios-instance";

import classes from "./TimeTablePage.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/UI/Button/Button";
import ImageBound from "../../Components/ImageBound/ImageBound";
import DropdownSelect from "../../Components/UI/DropdownSelect/DropdownSelect";
import Spinner from "../../Components/UI/Spinner/Spinner";

const TimeTablePage = () => {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const uploadTimeTable = () => {
    const formData = new FormData();
    formData.append("file", uploadedImage);
    formData.append("upload_preset", "vzyopycp");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dcgepe2c4/image/upload",
      formData
    )
      .then((res) => {
        axios
          .post("/faculty/uploadTT", {
            ttOf: department + semester,
            ttLink: res.data.secure_url,
          })
          .then((resp) => {
            resp.data.status === 200
              ? console.log("Updated TimeTable")
              : console.log("Uploaded TimeTable");
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchTT = () => {
    if (department !== "" && semester !== "") {
      setLoading(true);
      axios
        .post("/fetchTT", { ttOf: department + semester })
        .then((res) => {
          console.log(res);
          setLoading(false);
          setLoadedImage(res.data.ttLink);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data.msg);
        });
    } else {
      console.log("TT details insufficient");
    }
  };

  const imageComponent =
    loadedImage !== "" ? (
      <ImageBound Img={loadedImage} />
    ) : (
      <ImageBound>Uploaded Soon</ImageBound>
    );

  return (
    <div>
      <div className={classes.TimeTablePage}>
        <Navbar />
        <div className={classes.Content}>
          <div className={classes.ContentLeft}>
            {loading ? <Spinner /> : imageComponent}
          </div>
          <div className={classes.ContentRight}>
            <h3>
              Session :{" "}
              <span style={{ color: "#5A22B9" }}> 1 Jan - 30 June</span>
            </h3>
            <div className={classes.CheckTT}>
              <DropdownSelect
                Title="department"
                value={department}
                change={(val) => setDepartment(val)}
              >
                <option value="">Choose your Departement</option>
                <option value="CS">Computer Science</option>
                <option value="IT">Information Technology</option>
                <option value="ME">Mechenical Engg</option>
                <option value="EC">Electronics & Communication</option>
              </DropdownSelect>
              <DropdownSelect
                Title="class"
                value={semester}
                change={(val) => setSemester(val)}
              >
                <option value="">Choose your class</option>
                <option value="11">1st Semester - ‘A’</option>
                <option value="12">1st Semester - ‘B’</option>
                <option value="21">2nd Semester - ‘A’</option>
                <option value="22">2nd Semester - ‘B’</option>
                <option value="31">3rd Semester - ‘A’</option>
                <option value="32">3rd Semester - ‘B’</option>
                <option value="41">4th Semester - ‘A’</option>
                <option value="42">4th Semester - ‘B’</option>
                <option value="51">5th Semester - ‘A’</option>
                <option value="52">5th Semester - ‘B’</option>
              </DropdownSelect>
              <Button width="100%" clicked={fetchTT}>
                Search
              </Button>
            </div>
            <Link to="/" className={classes.DownloadLink}>
              Download as pdf
            </Link>
            <div className={classes.UploadTT}>
              <input
                type="file"
                onChange={(e) => setUploadedImage(e.target.files[0])}
              />
              <p
                style={{ cursor: "pointer" }}
                onClick={() => uploadTimeTable()}
              >
                Upload
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TimeTablePage;
