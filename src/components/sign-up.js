import React, { Component, useState } from "react";
import Confirmation from "./confirmation";
import PersonalDetails from "./personal-details";
import Success from "./success";
import UserDetails from "./user-details";

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
};
