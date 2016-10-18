import angular from 'angular';
import angularMeteor from 'angular-meteor';

import SharedState from '../services/sharedState.js';

function formToJson(SharedState) {
  return function (formData) {
    let obj = {
      type: SharedState.state.selectedForm.name,
      createdAt: "…",
    };
    for (let i in formData) {
      let row = formData[i];
      if (!row.key && !row.value) {
        continue;
      }
      if (row.key in obj) {
        obj[row.key] = [].concat(obj[row.key]);
        obj[row.key].push(row.value);
      } else {
        obj[row.key] = row.value;
      }
    }
    return obj;
  }
}

const name = 'formToJson';

export default angular.module(name, [
  angularMeteor,
  SharedState.name,
])
  .filter(name, [SharedState.name, formToJson]);
