import React from "react";

const UserMeasurementForm = ({
  next,
  setHeight,
  setWeight,
  setWeightUnit,
  setSex,
}) => {
  return (
    <div>
      <form className="flex flex-col">
        <label>
          Sex:
          <select onChange={(e) => setSex(e.target.value)}>
            <option value="m">M</option>
            <option value="f">F</option>
          </select>
        </label>
        <label>
          Height:
          <input
            type="number"
            onChange={(e) => setHeight(e.target.value)}
            required
            className="w-9"
          />{" "}
          centimeters
        </label>
        <label>
          Weight:
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <select onChange={(e) => setWeightUnit(e.target.value)}>
            <option value="kg">KG</option>
            <option value="lb">LB</option>
          </select>
        </label>
      </form>
      <button onClick={next}>Continue</button>
    </div>
  );
};

export default UserMeasurementForm;
