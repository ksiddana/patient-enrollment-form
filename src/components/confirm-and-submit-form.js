import React from "react";
import { Form, Checkbox, Container, Header } from "semantic-ui-react";

export const ConfirmAndSubmitForm = ({ prevStep, nextStep, handleChange, disableNextStep }) => {
  return (
    <Container textAlign="left">
      <Header>Disclosure</Header>
      <Form>
        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non
          magna. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna,
          vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod
          semper. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" onClick={(e, data) => handleChange(e, data)} />
        </Form.Field>
        <Form.Group>
          <Form.Button onClick={prevStep} type="submit">
            Previous
          </Form.Button>
          <Form.Button onClick={nextStep} type="submit" disabled={disableNextStep}>
            Next
          </Form.Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
