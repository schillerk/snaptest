import angular from 'angular';
import angularMeteor from 'angular-meteor';

class SharedState {
  constructor() {
    this.state = {
      selectedForm: null,
    };
  }
}

const name = 'SharedState';

export default angular.module(name, [
  angularMeteor,
])
  .service(name, SharedState);
