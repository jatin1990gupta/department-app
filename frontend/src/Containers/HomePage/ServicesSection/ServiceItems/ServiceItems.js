import React from "react";

import classes from "./ServiceItems.module.css";

import ServiceItem from "./ServiceItem/ServiceItem";

import notesImg from "../../../../Assets/icons/HomeIcons/HomeServices/notes.png";
import leaveImg from "../../../../Assets/icons/HomeIcons/HomeServices/leave.png";
import timetableImg from "../../../../Assets/icons/HomeIcons/HomeServices/tt.png";
import facultyImg from "../../../../Assets/icons/HomeIcons/HomeServices/faculties.png";
import profileImg from "../../../../Assets/icons/HomeIcons/HomeServices/profile.png";
import accessImg from "../../../../Assets/icons/HomeIcons/HomeServices/access.png";

const ServiceItems = (props) => {
  return (
    <div className={classes.ServiceItems}>
      <ServiceItem
        Img={notesImg}
        Title="All College Notices in one place"
        Body="See new updates related to Webinars, Seminars, Industrial Visits, Holidays, Scholarship Programmes, Academics, Internship Oppurtunities and lot more in 
one place."
      />
      <ServiceItem
        Img={leaveImg}
        Title="Online Leave Submission Form"
        Body="Now you can submit your leave application directly to your TG and HOD without waiting for their approval."
      />
      <ServiceItem
        Img={timetableImg}
        Title="Check your Latest Timetable"
        Body="Now you can updated with your latest current class-wise Tmetable without any signing up."
      />
      <ServiceItem
        Img={facultyImg}
        Title="Faculties Details"
        Body="Check all your faculties contacts, social medias and basic details in one place with optimized search"
      />
      <ServiceItem
        Img={profileImg}
        Title="Your Student Profile"
        Body="Get all your baisc details integrated with your college Email Id to fill out your leave form automatically by your details"
      />
      <ServiceItem
        Img={accessImg}
        Title="Access anywhere anytime"
        Body="This platform is Cloud-based E-portal for Oriental College of Technology, you can access all his features and functionalties anywhere you want!"
      />
    </div>
  );
};

export default ServiceItems;
