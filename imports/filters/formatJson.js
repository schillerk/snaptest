import angular from 'angular';
import angularMeteor from 'angular-meteor';

import SharedState from '../services/sharedState.js';

function formatJson () {
  return function (obj) {
    return JSON.stringify(obj, null, 4);
  }
}

const name = 'formatJson';

export default angular.module(name, [
  angularMeteor,
])
  .filter(name, formatJson);
