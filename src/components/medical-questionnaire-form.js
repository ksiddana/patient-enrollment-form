import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const MedicalQuestionnaire = ({ nextStep, prevStep, handleChange, formData, handleFrequencyChange }) => {
  return (
    <Form>
      {formData.map((questionGroup) => {
        if (questionGroup.type === "radio") {
          return (
            <Form.Group grouped>
              <label>{questionGroup.question}</label>
              <Form.Radio
                label="Yes"
                value="yes"
                checked={questionGroup.value === "yes"}
                onChange={(_, e) => handleChange(questionGroup.key, e.value)}
              />
              <Form.Radio
                label="No"
                value="no"
                checked={questionGroup.value === "no"}
                onChange={(_, e) => handleChange(questionGroup.key, e.value)}
              />
              {questionGroup.value === "yes" && (
                <Form.Input
                  label="How much and how often?"
                  type="text"
                  value={questionGroup.frequency}
                  onChange={(_, e) => handleFrequencyChange(questionGroup.key, e.value)}
                />
              )}
            </Form.Group>
          );
        }
        if (questionGroup.type === "textarea") {
          return (
            <Form.Group grouped>
              <Form.TextArea label={questionGroup.label} placeholder={questionGroup.placeholder} />
            </Form.Group>
          );
        }
      })}
      <Form.Group>
        <Form.Button onClick={prevStep} type="submit">
          Previous
        </Form.Button>
        <Form.Button onClick={nextStep} type="submit">
          Next
        </Form.Button>
      </Form.Group>
    </Form>
  );
};
export default MedicalQuestionnaire;
