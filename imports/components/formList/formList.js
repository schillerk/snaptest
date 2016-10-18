import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Forms } from '../../api/forms.js';
import SharedState from '../../services/sharedState.js';

import template from './formList.html';

class FormsListCtrl {

  constructor($scope, $timeout, SharedState) {
    $scope.viewModel(this);

    this.helpers({
      forms() {
        return Forms.find({});
      }
    });

    this.sharedState = SharedState.state;
    this.showNew = false;
    this.newFormName = '';

    // TODO: Is this the only way to have access to $timeout?
    this.focusNewInput = function () {
      $timeout(function () {
        $scope.focusHackNewFormInput();
      });
    };
  }

  selectForm(form) {
    this.sharedState.selectedForm = form;
    this.sharedState.selectedTab = 'insert';
  }

  isFormSelected(form) {
    return this.sharedState.selectedForm === form;
  }

  startAddingForm($timeout) {
    this.showNew = true;
    this.focusNewInput();
  }

  addForm() {
    Forms.insert({
      'name': this.newFormName,
    });
    this.showNew = false;
    this.newFormName = '';
  }

  deleteForm(form) {
    if (this.sharedState.selectedForm === form) {
      this.sharedState.selectedForm = null;
    }
    Forms.remove(form._id);
  }
}

const name = 'formList';

export default angular.module(name, [
  angularMeteor,
  SharedState.name,
])
  .component(name, {
    templateUrl: 'imports/components/formList/formList.html',
    controller: ['$scope', '$timeout', SharedState.name, FormsListCtrl],
    controllerAs: name,
  });
