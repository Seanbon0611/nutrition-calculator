import React from "react";

const UserGoalsForm = ({ next, prev, setGoal }) => {
  return (
    <div>
      <h1>Goals</h1>
      <h3>Next, let's take note of your goals!</h3>
      <p>Options:</p>
      <ul>
        <li>Build Muscle(Hypertrophy) / Build Strength</li>
        <li>Maintainance(Just want to maintain current weight </li>
        <li>Fat-Loss</li>
      </ul>
      <select onChange={(e) => setGoal(e.target.value)}>
        <option value="">-</option>
        <option value="lose">Fat-Loss</option>
        <option value="gain">Hypertrophy/Strength</option>
        <option value="maintain">Maintainance</option>
      </select>
      <button onClick={next}>Continue</button>
      <button onClick={prev}>Back</button>
    </div>
  );
};

export default UserGoalsForm;
