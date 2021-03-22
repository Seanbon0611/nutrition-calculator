import React from "react";

const ActivityForm = ({ setDaysActive, setActivityLevel }) => {
  return (
    <div>
      <h1>Actvity</h1>
      <label>
        How many days are you active per week?
        <input
          type="number"
          onChange={(e) => setActivityLevel(e.target.value)}
        />
      </label>
      <p>Light desription</p>
      <p>Moderate desription</p>
      <p>Intense desription</p>
      <label>
        <select onChange={(e) => setDaysActive(e.target.value)}>
          <option value="light">Light</option>
          <option value="moderate"></option>
          <option value="intense"></option>
        </select>
      </label>
    </div>
  );
};

export default ActivityForm;
