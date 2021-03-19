import React, { useState } from "react";
import UserGoalsForm from "../components/UserGoalsForm";
import UserMeasurementForm from "../components/UserMeasurementForm";
import UserResults from "../components/UserResults";
import ErrorPage from "./ErrorPage";

const LandingPage = () => {
  const [step, setStep] = useState(1);
  const [height, setHeight] = useState(null);
  const [heightUnit, setHeightUnit] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [weightUnit, setWeightUnit] = useState(null);
  const [goal, setGoal] = useState(null);
  const [daysActive, setDaysActive] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);

  switch (step) {
    case 1:
      return (
        <div>
          <UserMeasurementForm />
        </div>
      );
    case 2:
      return (
        <div>
          <UserGoalsForm />
        </div>
      );
    case 3:
      return (
        <div>
          <UserResults />
        </div>
      );
    default:
      return (
        <div>
          <ErrorPage />
        </div>
      );
  }
};

export default LandingPage;
