import React from "react";
import { Button, Container, Header, Icon, Grid } from "semantic-ui-react";

export const Success = ({ nextStep, handleResetForm }) => {
  const handleNewForm = () => {
    handleResetForm();
    nextStep();
  };
  return (
    <Container>
      <Grid.Row>
        <Icon.Group size="huge" color="green">
          <Icon size="big" name="circle outline" color="green" />
          <Icon name="user" color="green" />
        </Icon.Group>
        <Container>Form has been submitted</Container>
      </Grid.Row>

      <Button onClick={handleNewForm} type="submit">
        Start New Form
      </Button>
    </Container>
  );
};

export default Success;
