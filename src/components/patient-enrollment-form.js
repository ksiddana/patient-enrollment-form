import React, { useState } from "react";
import GeneralInformationForm from "./general-information-form";
import MedicalQuestionnaire from "./medical-questionnaire-form";
import ConfirmAndSubmitForm from "./confirm-and-submit-form";
import HealthConditionsForm from "./health-conditions-form";
import PatientSummary from "./patient-summary";
import Success from "./success";
import { initialFormDataState, initialMedicalFormDataState } from "../store";

export const PatientEnrollmentForm = () => {
  const [patientAgreementCheckbox, setPatientAgreementCheckbox] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormDataState);
  const [medicalFormData, setMedicalFormData] = useState(initialMedicalFormDataState);
  const [disableNextStep, setDisableNextStep] = useState(true);
  const [healthConditionForm, setHealthConditionForm] = useState({});

  const prevStep = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (step === 5 && patientAgreementCheckbox === true) {
      // disable Next Step button
      setPatientAgreementCheckbox(false);
      setStep(step - 1);
    } else {
      setStep(step - 1);
    }
  };

  const nextStep = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (step === 6) {
      setStep(1);
    } else if (step === 5 && patientAgreementCheckbox === false) {
      // disable Next Step button
      setDisableNextStep(true);
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

  const handleConfirmAndSubmitChange = (e, data) => {
    setPatientAgreementCheckbox(data.checked);
    if (!data.checked) {
      setDisableNextStep(true);
    } else {
      setDisableNextStep(false);
    }
  };

  const handleResetForm = (e) => {
    setFormData(initialFormDataState);
    setMedicalFormData(initialMedicalFormDataState);
    setPatientAgreementCheckbox(false);
    setDisableNextStep(true);
  };

  const handleHealthConditionFormChange = (e, data) => {
    const { value, options } = data;
    const type = options[0].type;
    const newHealthConditionForm = { ...healthConditionForm, [type]: value };
    setHealthConditionForm(newHealthConditionForm);
  };
  const handleSearchChange = (e, { searchQuery }) => {
    // setSearchQuery(searchQuery);
  };

  switch (step) {
    case 1:
      return <GeneralInformationForm nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return (
        <HealthConditionsForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleHealthConditionFormChange}
          handleSearchChange={handleSearchChange}
          healthConditionForm={healthConditionForm}
        />
      );
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
      return (
        <PatientSummary
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
          medicalFormData={medicalFormData}
          healthConditionForm={healthConditionForm}
        />
      );
    case 5:
      return (
        <ConfirmAndSubmitForm prevStep={prevStep} nextStep={nextStep} handleChange={handleConfirmAndSubmitChange} disableNextStep={disableNextStep} />
      );
    case 6:
      return <Success nextStep={nextStep} handleResetForm={handleResetForm} />;
  }
};

export default PatientEnrollmentForm;
