import React, { Component, useState, useReducer } from "react";
import Confirmation from "./confirmation";
import PersonalDetails from "./personal-details";
import Success from "./success";
import UserDetails from "./general-information-form";

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <UserDetails nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <PersonalDetails nextStep={nextStep} handleChange={handleChange} prevStep={prevStep} values={formData} />;
    case 3:
      return <Confirmation nextStep={nextStep} prevStep={prevStep} values={formData} />;
    case 4:
      return <Success />;
  }

  // export default class SignUp extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       step: 1,
  //       email: "",
  //       username: "",
  //       password: "",
  //       firstName: "",
  //       lastName: "",
  //       age: 0,
  //     };
  //   }

  //   prevStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step - 1 });
  //   };

  //   nextStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step + 1 });
  //   };

  //   handleChange = (input) => (e) => {
  //     this.setState({ [input]: e.target.value });
  //   };

  //   render() {
  //     const { step } = this.state;
  //     const { email, username, password, firstName, lastName, age } = this.state;
  //     const values = { email, username, password, firstName, lastName, age };

  //     switch (step) {
  //       case 1:
  //         return <UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
  //       case 2:
  //         return <PersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} prevStep={this.prevStep} values={values} />;
  //       case 3:
  //         return <Confirmation nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
  //       case 4:
  //         return <Success />;
  //       default:
  //       // do nothings
  //     }
  //   }
};
