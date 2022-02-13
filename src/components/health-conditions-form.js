import React from "react";
import { Form } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

const healthConditions = [
  {
    type: "cardiovascular",
    condition: "High blood pressure",
  },
  {
    type: "cardiovascular",
    condition: "Cardiac Arrest",
  },
  {
    type: "cardiovascular",
    condition: "Arrhythmia",
  },
  {
    type: "cardiovascular",
    condition: "Coronary heart disease",
  },
  {
    type: "cardiovascular",
    condition: "Coronary heart disease",
  },
  {
    type: "gastrointestinal",
    condition: "IBS",
  },
  {
    type: "gastrointestinal",
    condition: "Crohn's Disease",
  },
  {
    type: "gastrointestinal",
    condition: "Gallstones",
  },
  {
    type: "psychological",
    condition: "Depression",
  },
  {
    type: "psychological",
    condition: "Anxiety",
  },
  {
    type: "psychological",
    condition: "Stress",
  },
  {
    type: "psychological",
    condition: "Insomnia",
  },
  {
    type: "other",
    condition: "Cancer",
  },
  {
    type: "other",
    condition: "Diabetes",
  },
];

const conditionsGroupedByType = [
  {
    type: "Cardiovascular",
    conditions: [
      { type: "cardiovascular", condition: "High blood pressure", text: "a", value: "a", key: "a" },
      { type: "cardiovascular", condition: "Cardiac Arrest", text: "b", value: "b", key: "b" },
      { type: "cardiovascular", condition: "Arrhythmia", text: "c", value: "c", key: "c" },
      { type: "cardiovascular", condition: "Coronary heart disease", text: "d", value: "d", key: "d" },
      { type: "cardiovascular", condition: "Coronary heart disease", text: "e", value: "e", key: "e" },
    ],
  },
  {
    type: "Gastrointestinal",
    conditions: [
      { type: "gastrointestinal", condition: "IBS", text: "a", value: "a", key: "a" },
      { type: "gastrointestinal", condition: "Crohn's Disease", text: "b", value: "b", key: "b" },
      { type: "gastrointestinal", condition: "Gallstones", text: "c", value: "c", key: "c" },
    ],
  },
  {
    type: "Psychological",
    conditions: [
      { type: "psychological", condition: "Depression" },
      { type: "psychological", condition: "Anxiety" },
      { type: "psychological", condition: "Stress" },
      { type: "psychological", condition: "Insomnia" },
    ],
  },
  {
    type: "Other",
    conditions: [
      { type: "other", condition: "Cancer" },
      { type: "other", condition: "Diabetes" },
    ],
  },
];

// [{type: "cardiovascular", options: [{value: "High blood pressure"}]}]
// const formattedHealthConditions = conditionsGroupedByType.map((type, index) => {
//   return type.conditions.map((condition) => {
//     return [{ ...condition, key: condition.condition, value: condition.condition, text: condition.condition }];
//   });
// });
// const temp = [];
// const groupConditionsByType = healthConditions.map((condition) => {
//   let newType = { type: condition.type, conditions: [condition.condition] };

//   if (temp.length > 1) {
//     temp.forEach((type) => {
//       if (type === condition.type) {
//         type.conditions.push(condition.condition);
//       } else {
//       }
//     });
//   } else {
//     temp.push(newType);
//   }

//   return temp;
// });

// const tempType = _.chain(healthConditions)
//   .groupBy("type")
//   .map((value, key) => ({ key: _.upperFirst(key), value, text: value }))
//   .value();

const HealthConditionsForm = ({ nextStep, prevStep, handleChange }) => {
  // const groupConditionsByType = healthConditions.reduce((condition) => {}, )
  // console.log("formattedHealthConditions", formattedHealthConditions);
  return (
    <Form>
      {conditionsGroupedByType.map((type) => {
        return <Dropdown fluid search selection options={type.conditions} />;
      })}
      HealthConditionsForm
      <button onClick={prevStep} type="submit">
        Previous
      </button>
      <button onClick={nextStep} type="submit">
        Next
      </button>
    </Form>
  );
};

export default HealthConditionsForm;
