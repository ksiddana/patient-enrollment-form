import React, { useState } from "react";
import { Form, Container, Grid } from "semantic-ui-react";

const MedicalQuestionnaire = ({ nextStep, prevStep, handleChange, formData, handleFrequencyChange }) => {
  return (
    <Container textAlign="left">
      <Form>
        {formData.map((questionGroup) => {
          if (questionGroup.type === "radio") {
            return (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
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
                  </Grid.Column>
                  <Grid.Column width={8}>
                    {questionGroup.value === "yes" && (
                      <Form.Input
                        label="How much and how often?"
                        type="text"
                        value={questionGroup.frequency}
                        onChange={(_, e) => handleFrequencyChange(questionGroup.key, e.value)}
                      />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            );
          }
          if (questionGroup.type === "textarea") {
            return (
              <Form.Group grouped>
                <Form.TextArea
                  label={questionGroup.label}
                  placeholder={questionGroup.placeholder}
                  onChange={(_, e) => handleChange(questionGroup.key, e.value)}
                />
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
    </Container>
  );
};
export default MedicalQuestionnaire;
