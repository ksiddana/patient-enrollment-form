export const initialFormDataState = {
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  phoneNumber: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
};

export const initialMedicalFormDataState = [
  { type: "radio", question: "Do you smoke any tobacco products?", value: "", key: 0, frequency: "" },
  { type: "radio", question: "Do you drink alcohol?", value: "", key: 1, frequency: "" },
  { type: "radio", question: "Have you regularly used illicit drugs?", value: "", key: 2, frequency: "" },
  {
    type: "textarea",
    label: "Current medications",
    placeholder: "Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.",
    value: "",
    key: 3,
  },
  {
    type: "textarea",
    label: "Medication allergies or reactions",
    placeholder: "Please list any medication allergies or reactions",
    value: "",
    key: 4,
  },
  {
    type: "textarea",
    label: "List any surgeries or hospital stays you have had and their approximate date / year",
    placeholder: "Type of surgery or reason for hospitalization",
    value: "",
    key: 5,
  },
];

export const initialHealthConditionsFormState = [{ type: "", conditions: [] }];
