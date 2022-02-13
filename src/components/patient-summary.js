import React from "react";
import { Form, Grid, Button, Container, Header } from "semantic-ui-react";

export const PatientSummary = ({ nextStep, prevStep, formData, medicalFormData }) => {
  return (
    <Container textAlign="left">
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" block textAlign="center">
              Patient Information
            </Header>
            <Container textAlign="left">First Name: {formData.firstName}</Container>
            <Container textAlign="left">Last Name: {formData.lastName}</Container>
            <Container textAlign="left">Gender: {formData.gender}</Container>
            <Header as="h3" block textAlign="center">
              Contact Details
            </Header>
            <Container textAlign="left">Email Address: {formData.email}</Container>
            <Container textAlign="left">Phone Number: {formData.phoneNumber}</Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" block textAlign="center">
              Address
            </Header>
            <Container textAlign="left">Street Name: {formData.street}</Container>
            <Container textAlign="left">City: {formData.city}</Container>
            <Container textAlign="left">State: {formData.state}</Container>
            <Container textAlign="left">Postal Code: {formData.zipcode}</Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" block textAlign="center">
              Medical Information
            </Header>
            {medicalFormData.map((questionGroup) => {
              if (questionGroup.type === "radio") {
                return (
                  <Container textAlign="left">
                    <Container>{questionGroup.question}</Container>
                    <Container>{questionGroup.value}</Container>
                  </Container>
                );
              } else {
                return (
                  <Container textAlign="left">
                    <Container>{questionGroup.label}</Container>
                    <Container>{questionGroup.value}</Container>
                  </Container>
                );
              }
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Button primary onClick={prevStep} type="submit">
        Previous
      </Button>
      <Button onClick={nextStep} type="submit">
        Next
      </Button>
    </Container>
  );
};
