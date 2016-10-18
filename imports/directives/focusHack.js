import angular from 'angular';
import angularMeteor from 'angular-meteor';

function focusHack() {
  return function (scope, element, attrs) {
    var functionName = 'focusHack' + attrs.focusHack;
    scope[functionName] = function () {
      element.focus();
    }
  };
}

const name = 'focusHack';

export default angular.module(name, [
  angularMeteor,
])
  .directive(name, focusHack);
