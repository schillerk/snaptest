import angular from 'angular';
import angularMeteor from 'angular-meteor';

function pluralize () {
  return function (noun) {
    if (noun == 'person') {
      return 'people';
    }
    if (noun == 'Person') {
      return 'People';
    }
    return noun + 's';
  }
}

const name = 'pluralize';

export default angular.module(name, [
  angularMeteor,
])
  .filter(name, pluralize);
