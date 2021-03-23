import React from "react";

const UserMeasurementForm = ({
  next,
  setHeight,
  setWeight,
  setWeightUnit,
  setSex,
  setAge,
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <label>
          Age:
          <input type="number" onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Sex:
          <select onChange={(e) => setSex(e.target.value)}>
            <option></option>
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
            <option></option>
            <option value="kg">KG</option>
            <option value="lb">LB</option>
          </select>
        </label>
      </div>
      <button onClick={next}>Continue</button>
    </div>
  );
};

export default UserMeasurementForm;
