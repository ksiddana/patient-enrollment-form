import React from "react";
import { Form } from "semantic-ui-react";

const GeneralInformationForm = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
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
          Email
          <input placeholder="Email" onChange={handleChange("email")} value={values.email} />
        </label>

        <button onClick={Continue} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default GeneralInformationForm;
