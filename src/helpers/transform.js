import { healthConditions } from "../fixtures/health-conditions";

let map = {};
const groupBy = (healthConditions) => {
  for (let i = 0; i < healthConditions.length; i++) {
    let newObj = {
      ...healthConditions[i],
      key: healthConditions[i].condition,
      value: healthConditions[i].condition,
      text: healthConditions[i].condition,
    };
    if (!map[healthConditions[i].type]) {
      map[healthConditions[i].type] = { type: newObj.type, conditions: [newObj] };
    } else {
      map[newObj.type].conditions.push(newObj);
    }
  }
  return Object.values(map);
};

export const conditionsGroupedByType = groupBy(healthConditions);
