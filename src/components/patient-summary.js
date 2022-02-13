import React from "react";
import { Form } from "semantic-ui-react";

export const PatientSummary = ({ nextStep, prevStep }) => {
  return (
    <Form>
      PatientSummary
      <button onClick={prevStep} type="submit">
        Previous
      </button>
      <button onClick={nextStep} type="submit">
        Next
      </button>
    </Form>
  );
};
