import React, { useState } from "react";

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
          <h1>Measurements</h1>
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Goals</h1>
        </div>
      );
    case 3:
      return (
        <div>
          <h1>Results</h1>
        </div>
      );
  }
};

export default LandingPage;
