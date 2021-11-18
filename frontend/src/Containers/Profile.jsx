import React from "react";

import profilePic from "../Assets/img/ProfilePage/profile.png";
import Navbar from "../Components/Navbar";
import { logoutUser } from "../store/features/auth";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="profile">
      <Navbar />
      <div className="profile__options">
        <p>Profile</p>
        <p onClick={() => dispatch(logoutUser())}>Logout</p>
      </div>
      <div className="profile__content">
        <div className="profile__content--left">
          <div className="profile__content--left__header">
            <h1>PERSONAL DETAILS</h1>
          </div>
          <img src={profilePic} alt="" />
          <div className="personalDetails">
            <div className="personalDetails__title">
              <h3>NAME: </h3>
              <h3>SEMESTER: </h3>
              <h3>COLLEGE: </h3>
              <h3>BRANCH: </h3>
              <h3>ENROLLMENT NO.: </h3>
            </div>
            <div className="personalDetails__body">
              <p>Jatin Gupta </p>
              <p>5TH </p>
              <p>OCT </p>
              <p>CSE </p>
              <p>0126CS181052 </p>
            </div>
          </div>
        </div>
        <div className="profile__content--right">
          <div className="profile__content--right__header">
            <h1>ABOUT ME</h1>
          </div>
          <div className="aboutDetails">
            <div className="aboutDetails__content">
              <div className="aboutDetails__content__title">
                <h3>FATHER’S NAME : </h3>
                <h3>DEGREE : </h3>
                <h3>AGE : </h3>
                <h3>E-MAIL : </h3>
                <h3>PHONE (WHATSAPP) : </h3>
                <h3>GENDER : </h3>
                <h3>CATEGORY : </h3>
              </div>
              <div className="aboutDetails__content__body">
                <p>Jatin Gupta </p>
                <p>B.TECH </p>
                <p>20 </p>
                <p className="primary-color">0126CS181052@oriental.ac.in </p>
                <p className="primary-color">+91- 9888888888 </p>
                <p>Male </p>
                <p>GENERAL </p>
              </div>
            </div>
            <div className="aboutDetails__content">
              <div className="aboutDetails__content__title">
                <h3>MOTHER’S NAME :</h3>
                <h3>HOD : </h3>
                <h3>TG : </h3>
                <h3>HOMETOWN : </h3>
                <h3>PHONE : </h3>
                <h3>DOB : </h3>
              </div>
              <div className="aboutDetails__content__body">
                <p>Jatin Gupta </p>
                <p>Prof. Sanjay Sharma </p>
                <p>Amit Dubey </p>
                <p>Lalitpur (U.P.) </p>
                <p className="primary-color">+91- 8888888889 </p>
                <p>13-02-2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
