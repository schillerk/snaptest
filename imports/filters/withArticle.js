import angular from 'angular';
import angularMeteor from 'angular-meteor';

function withArticle () {
  return function (noun) {
    if ('aeiouAEIOU'.indexOf(noun[0]) != -1) {
      return 'an ' + noun;
    } else {
      return 'a ' + noun;
    }
  }
}

const name = 'withArticle';

export default angular.module(name, [
  angularMeteor,
])
  .filter(name, withArticle);
