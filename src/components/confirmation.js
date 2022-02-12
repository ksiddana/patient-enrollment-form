import React from "react";

const Confirmation = ({ nextStep, prevStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div>Summary</div>
      <p>First Name {values.firstName}</p>
      <button onClick={Previous} type="submit" fullWidth variant="contained" color="primary">
        Previous
      </button>
      <button onClick={Continue} type="submit" fullWidth variant="contained" color="primary">
        Next
      </button>
    </div>
  );
};

export default Confirmation;
