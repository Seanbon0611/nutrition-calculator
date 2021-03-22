import React, { useState } from "react";
import ActivityForm from "../components/ActivityForm";
import UserGoalsForm from "../components/UserGoalsForm";
import UserMeasurementForm from "../components/UserMeasurementForm";
import UserResults from "../components/UserResults";
import ErrorPage from "./ErrorPage";

const LandingPage = () => {
  const [step, setStep] = useState(1);
  const [sex, setSex] = useState(null);
  const [height, setHeight] = useState(null);
  const [heightUnit, setHeightUnit] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [weightUnit, setWeightUnit] = useState(null);
  const [goal, setGoal] = useState(null);
  const [daysActive, setDaysActive] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);

  const next = () => {
    setStep((s) => s + 1);
  };

  const prev = () => {
    setStep((s) => s - 1);
  };

  switch (step) {
    case 1:
      return (
        <div>
          <UserMeasurementForm
            next={next}
            setSex={setSex}
            setHeight={setHeight}
            setHeightUnit={setHeightUnit}
            setAge={setAge}
            setWeight={setWeight}
            setWeightUnit={setWeightUnit}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <UserGoalsForm
            next={next}
            prev={prev}
            setGoal={setGoal}
            setDaysActive={setDaysActive}
            setActivityLevel={setActivityLevel}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <ActivityForm
            setDaysActive={setDaysActive}
            setActivityLevel={setActivityLevel}
          />
        </div>
      );
    case 4:
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
