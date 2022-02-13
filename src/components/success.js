import React from "react";
import { Button, Container } from "semantic-ui-react";

export const Success = ({ nextStep, handleResetForm }) => {
  const handleNewForm = () => {
    handleResetForm();
    nextStep();
  };
  return (
    <Container>
      You are done!
      <Button onClick={handleNewForm} type="submit">
        Start New Form
      </Button>
    </Container>
  );
};

export default Success;
