import React from "react";

const UserGoalsForm = ({ next, prev, setGoal }) => {
  return (
    <div>
      <h1>Goals</h1>
      <button onClick={next}>Continue</button>
      <button onClick={prev}>Back</button>
    </div>
  );
};

export default UserGoalsForm;
