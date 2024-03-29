import angular from 'angular';
import angularMeteor from 'angular-meteor';

function ngEnter() {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
}

const name = 'ngEnter';

export default angular.module(name, [
  angularMeteor,
])
  .directive(name, ngEnter);
