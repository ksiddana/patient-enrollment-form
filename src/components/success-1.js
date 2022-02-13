import React from "react";
import { Form } from "semantic-ui-react";

export const Success1 = ({ nextStep }) => {
  return (
    <Form>
      You are done!
      <Form.Button onClick={nextStep} type="submit">
        Start New Form
      </Form.Button>
    </Form>
  );
};

export default Success1;
