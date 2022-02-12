import React, { useState } from "react";
import GeneralInformationForm from "./general-information-form";
import { MedicalQuestionnaire } from "./medical-questionnaire-form";
import { ConfirmAndSubmitForm } from "./confirm-and-submit-form";
import { HealthConditionsForm } from "./health-conditions-form";
import { PatientSummary } from "./patient-summary";

export const PatientEnrollmentForm = () => {
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
      return <GeneralInformationForm nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <HealthConditionsForm />;
    case 3:
      return <MedicalQuestionnaire nextStep={nextStep} prevStep={prevStep} values={formData} />;
    case 4:
      return <PatientSummary />;
    case 5:
      return <ConfirmAndSubmitForm />;
  }
};

export default PatientEnrollmentForm;
