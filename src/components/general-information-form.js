import React from "react";
import { Form, Select, Container, Grid, Button } from "semantic-ui-react";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const GeneralInformationForm = ({ nextStep, handleChange, formData }) => {
  return (
    <Container textAlign="left">
      <Form>
        <Form.Input name="firstName" label="First Name" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <Form.Input name="lastName" label="Last Name" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
        <Form.Select name="gender" label="Gender" options={genderOptions} placeholder="Gender" onChange={handleChange} value={formData.gender} />
        <Form.Group>
          <Form.Input name="email" label="Email" placeholder="Email" onChange={handleChange} value={formData.email} />
          <Form.Input name="phoneNumber" label="Phone Number" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} />
        </Form.Group>
        <Grid.Column width={2}>
          <Form.Input name="street" label="Street Address" placeholder="Street Address" onChange={handleChange} value={formData.street} />
          <Form.Input name="city" label="City" placeholder="City" onChange={handleChange} value={formData.city} />
          <Form.Input name="state" label="State" placeholder="State" onChange={handleChange} value={formData.state} />
          <Form.Input name="zipcode" label="Postal Code" placeholder="Postal Code" onChange={handleChange} value={formData.zipcode} />
        </Grid.Column>
      </Form>
      <Button onClick={nextStep} type="submit">
        Next
      </Button>
    </Container>
  );
};

export default GeneralInformationForm;
