import React from "react";
import { Form, Select } from "semantic-ui-react";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const GeneralInformationForm = ({ nextStep, handleChange, formData }) => {
  return (
    <Form>
      <Form.Input name="firstName" label="First Name" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <Form.Input name="lastName" label="Last Name" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
      <Form.Select name="gender" label="Gender" options={genderOptions} placeholder="Gender" onChange={handleChange} value={formData.gender} />
      <Form.Group widths="2">
        <Form.Input name="email" label="Email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <Form.Input name="phoneNumber" label="Phone Number" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} />
      </Form.Group>
      <Form.Group widths="4">
        <Form.Input name="street" label="Street Address" placeholder="Street Address" onChange={handleChange} value={formData.street} />
        <Form.Input name="city" label="City" placeholder="City" onChange={handleChange} value={formData.city} />
        <Form.Input name="state" label="State" placeholder="State" onChange={handleChange} value={formData.state} />
        <Form.Input name="zipcode" label="ZipCode" placeholder="Zip" onChange={handleChange} value={formData.zipcode} />
      </Form.Group>
      <button onClick={nextStep} type="submit">
        Next
      </button>
    </Form>
  );
};

export default GeneralInformationForm;
