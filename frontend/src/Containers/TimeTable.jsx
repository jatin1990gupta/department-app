import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "../Components/UI/Button";
import ImageBound from "../Components/ImageBound";
import DropdownSelect from "../Components/UI/DropdownSelect";
import Spinner from "../Components/UI/Spinner";
import { fetchTT, uploadTT } from "../service/timeTable";
import { DropdownOptions } from "../constants/timeTable";
import { Routes } from "../constants/routes";
import Notification from "../Components/Notification";
import { useSelector } from "react-redux";
import { FACULTY_TEXT } from "../constants";

const TimeTablePage = () => {
  const { userType } = useSelector((state) => state.general);

  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const fileInputRef = useRef(null);

  console.log(fileInputRef.current && fileInputRef.current.value);

  const uploadTimeTable = async () => {
    if (uploadedImage && department && semester) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", uploadedImage);
        formData.append("upload_preset", "vzyopycp");

        const cloudinaryImg = await Axios.post(
          "https://api.cloudinary.com/v1_1/dcgepe2c4/image/upload",
          formData
        ).then(async (res) => res.data.secure_url);

        const timeTableImg = await uploadTT({
          timeTableOf: department + semester,
          timeTableImg: cloudinaryImg,
        });

        Notification("success", "Success", "Upload Successful");
        fileInputRef.current.value = null;
        setLoadedImage(timeTableImg);
      } catch {
        setLoadedImage("");
      } finally {
        setLoading(false);
      }
    } else {
      Notification("error", "Error", "Missing Details");
    }
  };

  const fetchTimeTable = async () => {
    if (department && semester) {
      setLoading(true);
      setLoadedImage("");
      try {
        const timeTableImg = await fetchTT({
          timeTableOf: department + semester,
        });
        setLoadedImage(timeTableImg);
      } finally {
        setLoading(false);
      }
    } else {
      Notification("error", "Error", "Missing Details");
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
      <div className="timetable">
        <Navbar />
        <div className="timetable__content">
          <div className="timetable__content--left">
            {loading ? <Spinner /> : imageComponent}
          </div>
          <div className="timetable__content--right">
            <h3>
              Session : <span> 1 Jan - 30 June</span>
            </h3>
            <div className="timetable__content--right__checktimetable">
              <DropdownSelect
                Title="department"
                value={department}
                change={(val) => setDepartment(val)}
              >
                {DropdownOptions.department.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.title}
                  </option>
                ))}
              </DropdownSelect>
              <DropdownSelect
                Title="class"
                value={semester}
                change={(val) => setSemester(val)}
              >
                {DropdownOptions.class.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.title}
                  </option>
                ))}
              </DropdownSelect>
              <Button width="100%" clicked={fetchTimeTable}>
                Search
              </Button>
              <Link
                to={Routes.notices}
                className="timetable__content__downloadbutton"
              >
                Download as pdf
              </Link>
            </div>
            {userType === FACULTY_TEXT ? (
              <div className="timetable__content__uploadbutton">
                <input
                  type="file"
                  onChange={(e) => setUploadedImage(e.target.files[0])}
                  ref={fileInputRef}
                />
                <p onClick={uploadTimeTable}>Upload</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TimeTablePage;
