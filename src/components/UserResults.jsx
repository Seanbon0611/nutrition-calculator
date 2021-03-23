import React, { useEffect, useState } from "react";

const UserResults = ({
  prev,
  daysActive,
  bmr,
  calculateCaloricIntake,
  caloricIntake,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(daysActive);
    calculateCaloricIntake(daysActive, bmr);
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>Results</h1>
      {loading ? (
        <div>
          <h1>Calculating...</h1>
        </div>
      ) : (
        <div>
          <h1>{`Your ideal caloric intake is ${caloricIntake}`}</h1>
        </div>
      )}
      <button onClick={prev}>Back</button>
    </div>
  );
};

export default UserResults;
