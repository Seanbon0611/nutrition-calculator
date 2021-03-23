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
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [weightUnit, setWeightUnit] = useState(null);
  const [goal, setGoal] = useState(null);
  const [daysActive, setDaysActive] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [caloricIntake, setCaloricIntake] = useState(null);
  const [error, setError] = useState([]);

  const next = () => {
    setStep((s) => s + 1);
  };

  const prev = () => {
    setStep((s) => s - 1);
  };

  const calculateBmr = (w, wu, h, a, s) => {
    const base = 10 * w + 6.25 * h - 5 * a;
    if (wu === "lb") {
      setWeight(w * 0.45359237);
    }
    if (s === "m") {
      return setBmr(base + 5);
    } else if (s === "f") {
      return setBmr(base - 161);
    } else {
      return setError([...error, "Error calculating"]);
    }
  };
  const calculateCaloricIntake = (da, b) => {
    if (da === 5) {
      setCaloricIntake(b * 1.6);
    } else if (da > 0 && da < 4) {
      setCaloricIntake(b * 1.3);
    } else if (da < 7 && da > 5) {
      setCaloricIntake(b * 1.8);
    } else {
      setError([...error, "Error Calculating Calories"]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmr(weight, weightUnit, height, age, sex);
    next();
  };
  switch (step) {
    case 1:
      return (
        <div>
          <UserMeasurementForm
            next={next}
            setSex={setSex}
            setHeight={setHeight}
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
            next={next}
            prev={prev}
            setDaysActive={setDaysActive}
            setActivityLevel={setActivityLevel}
            handleSubmit={handleSubmit}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <UserResults
            prev={prev}
            calculateCaloricIntake={calculateCaloricIntake}
            bmr={bmr}
            daysActive={daysActive}
            caloricIntake={caloricIntake}
          />
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
