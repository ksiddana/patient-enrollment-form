import React from "react";
import { Form, Container, Grid, Header, Label, Button } from "semantic-ui-react";

const MedicalQuestionnaire = ({ nextStep, prevStep, handleChange, formData, handleFrequencyChange }) => {
  return (
    <Container textAlign="left">
      <Header as="h3" block textAlign="center">
        Medical Questionnaire
      </Header>
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
                      <Form.Field inline>
                        <Form.Input
                          label="How much and how often? (times/week)"
                          type="text"
                          value={questionGroup.frequency}
                          onChange={(_, e) => handleFrequencyChange(questionGroup.key, e.value)}
                        />
                        <Label basic color="red" pointing>
                          Please enter a value
                        </Label>
                      </Form.Field>
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
      </Form>
      <Container textAlign="center">
        <Button onClick={prevStep} type="submit">
          Previous
        </Button>
        <Button onClick={nextStep} type="submit" positive>
          Next
        </Button>
      </Container>
    </Container>
  );
};
export default MedicalQuestionnaire;
