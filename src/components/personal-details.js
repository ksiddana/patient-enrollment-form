import React from "react";

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
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
      <form>
        <label>
          First Name
          <input type="text" placeholder="First Name" value={values.firstName} onChange={handleChange("firstName")} />
        </label>
        <br />
        <label>
          Last Name
          <input placeholder="Last Name" onChange={handleChange("lastName")} value={values.lastName} />
        </label>
        <br />
        <label>
          Age
          <input placeholder="Age" onChange={handleChange("age")} value={values.age} />
        </label>
        <button onClick={Previous} type="submit" fullWidth variant="contained" color="primary">
          Previous
        </button>

        <button onClick={Continue} type="submit" fullWidth variant="contained" color="primary">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
