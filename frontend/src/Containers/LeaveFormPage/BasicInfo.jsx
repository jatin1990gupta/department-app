import React, { useState } from "react";
import { DatePicker, Space, Button, TimePicker } from "antd";

import UploadFile from "../../Components/UI/UploadFile";

const BasicInfo = ({ stepCount, setStepCount }) => {
  const [dayOption, setDayOption] = useState(0);

  const dateVal = (date, dateString) => console.log(date, dateString);

  return (
    <div className="basic-info">
      <div className="basic-info__select-day">
        <input
          type="radio"
          id="single-day"
          onClick={() => setDayOption(1)}
          checked={dayOption === 1}
        />
        <label for="single-day">Same Day between College</label>
        <input
          type="radio"
          id="multiple-day"
          onClick={() => setDayOption(2)}
          checked={dayOption === 2}
        />
        <label for="multiple-day">One or More No. of Days</label>
      </div>

      <div className="basic-info__subject">
        <p>Subject</p>
        <input placeholder="reason in brief within 30 words" />
      </div>

      <div className="basic-info__description">
        <p>Description</p>
        <textarea
          placeholder="explain your reason within 100 words"
          rows="10"
        />
      </div>

      <div className="basic-info__bottom">
        <div className="basic-info__bottom--left">
          <div className="basic-info__bottom--left__option">
            <Space direction="vertical">
              Upload
              <UploadFile />
            </Space>
          </div>
          {dayOption === 1 ? (
            <div className="basic-info__bottom--left__option">
              <Space direction="vertical">
                Time
                <TimePicker format={"HH:mm"} />
              </Space>
            </div>
          ) : dayOption === 2 ? (
            <>
              <div className="basic-info__bottom--left__option">
                <Space direction="vertical">
                  Start Date
                  <DatePicker onChange={dateVal} />
                </Space>
              </div>
              <div className="basic-info__bottom--left__option">
                <Space direction="vertical">
                  End Date
                  <DatePicker onChange={dateVal} />
                </Space>
              </div>
            </>
          ) : null}
        </div>
        <div className="basic-info__bottom--right">
          <Button type="primary" onClick={() => setStepCount(stepCount + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
