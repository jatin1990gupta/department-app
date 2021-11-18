import React from "react";
import { Button, Input, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SendTo = ({ stepCount, setStepCount }) => {
  return (
    <div className="send-to">
      <div className="send-to__search">
        <p>Search</p>
        <Input prefix={<SearchOutlined />} placeholder='Try "sanjay sharma' />
      </div>

      <div className="send-to__select-faculty">
        <Checkbox>Amit Dubey - (CSE 5th SEM - TG )</Checkbox>
        <Checkbox>Sanjay Sharma - (OCT CSE - HOD)</Checkbox>
      </div>

      <div className="send-to__bottom">
        <Button type="text" onClick={() => setStepCount(stepCount - 1)}>
          Back to Details
        </Button>
        <Button type="primary" onClick={() => setStepCount(stepCount + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SendTo;
