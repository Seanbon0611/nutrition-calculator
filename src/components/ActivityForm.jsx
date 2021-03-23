import React from "react";

const ActivityForm = ({
  setDaysActive,
  setActivityLevel,
  next,
  prev,
  handleSubmit,
}) => {
  return (
    <div>
      <h1>Actvity</h1>
      <label>
        How many days are you active per week?
        <input type="number" onChange={(e) => setDaysActive(e.target.value)} />
      </label>
      <p>Light desription</p>
      <p>Moderate desription</p>
      <p>Intense desription</p>
      <form onSubmit={handleSubmit}>
        <label>
          <select onChange={(e) => setActivityLevel(e.target.value)}>
            <option>-</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="intense">Intense</option>
          </select>
        </label>
        <button onClick={prev}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityForm;
