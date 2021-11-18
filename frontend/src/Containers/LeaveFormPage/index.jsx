import React, { useState } from "react";
import { Steps } from "antd";

import Navbar from "../../Components/Navbar";
import BasicInfo from "./BasicInfo";
import SendTo from "./SendTo";

const LeaveFormPage = () => {
  const { Step } = Steps;

  const [stepCount, setStepCount] = useState(0);

  return (
    <div className="leave-form">
      <Navbar />
      <div className="leave-form__content">
        <h4>Submit your leave form here.</h4>
        <h6>
          Please tell us a bit about your reason for leave so that we can send
          your application to your personalized faculty.
        </h6>

        <div className="leave-form__content__stepper">
          <Steps size="default" current={stepCount}>
            <Step title="Fill basic Details" />
            <Step title="Send to" />
            <Step title="Submit" />
          </Steps>
        </div>
        {stepCount === 0 ? (
          <BasicInfo stepCount={stepCount} setStepCount={setStepCount} />
        ) : stepCount === 1 ? (
          <SendTo stepCount={stepCount} setStepCount={setStepCount} />
        ) : null}
      </div>
    </div>
  );
};

export default LeaveFormPage;
