import React, { useState } from "react";
import GeneralInformationForm from "./general-information-form";
import MedicalQuestionnaire from "./medical-questionnaire-form";
import { ConfirmAndSubmitForm } from "./confirm-and-submit-form";
import HealthConditionsForm from "./health-conditions-form";
import { PatientSummary } from "./patient-summary";
import Success1 from "./success-1";
import { initialFormDataState, initialMedicalFormDataState } from "../store";

export const PatientEnrollmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormDataState);
  const [medicalFormData, setMedicalFormData] = useState(initialMedicalFormDataState);
  const [patientAgreementCheckbox, setPatientAgreementCheckbox] = useState(false);

  const prevStep = (e) => {
    if (e) {
      e.preventDefault();
      setStep(step - 1);
    }
  };

  const nextStep = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (step === 6) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleMedicalFormChange = (index, value) => {
    const newMedicalFormData = [...medicalFormData];
    newMedicalFormData[index].value = value;
    if (value === "no") {
      newMedicalFormData[index].frequency = "";
    }
    setMedicalFormData(newMedicalFormData);
  };

  const handleMedicalFormFrequencyChange = (index, value) => {
    const newMedicalFormData = [...medicalFormData];
    if (newMedicalFormData[index].value === "yes") {
      newMedicalFormData[index].frequency = value;
    } else {
      newMedicalFormData[index].frequency = "";
    }
    setMedicalFormData(newMedicalFormData);
  };

  const handleConfirmAndSubmitChange = (e) => {
    console.log(e);
  };

  const handleResetForm = (e) => {
    if (e) {
      e.preventDefault();
      console.log(e);
    }
  };
  // console.log("formData", formData);

  switch (step) {
    case 1:
      return <GeneralInformationForm nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <HealthConditionsForm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />;
    case 3:
      return (
        <MedicalQuestionnaire
          nextStep={nextStep}
          prevStep={prevStep}
          formData={medicalFormData}
          handleChange={handleMedicalFormChange}
          handleFrequencyChange={handleMedicalFormFrequencyChange}
        />
      );
    case 4:
      return <PatientSummary prevStep={prevStep} nextStep={nextStep} />;
    case 5:
      return <ConfirmAndSubmitForm prevStep={prevStep} nextStep={nextStep} handleChange={handleConfirmAndSubmitChange} />;
    case 6:
      return <Success1 nextStep={nextStep} handleChange={() => {}} />;
  }
};

export default PatientEnrollmentForm;
