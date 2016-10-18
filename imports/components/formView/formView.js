import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Data } from '../../api/data.js';
import SharedState from '../../services/sharedState.js';

import template from './formView.html';

// TODO: Don't duplicate this code (see formToJson.js).
function toJson (formData, type) {
  let obj = {
    type: type,
    createdAt: new Date(),
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

class FormViewCtrl {

  constructor($element, $scope, $timeout, SharedState) {
    $scope.viewModel(this);

    this.helpers({
      documents() {
        // TODO: This may be brittle. The accuracy of the documents depends on
        // selectedType being updated each time the 'view' tab is exposed.
        return Data.find({
          type: this.getReactively('selectedType'),
        });
      }
    });

    this.sharedState = SharedState.state;
    this.sharedState.selectedTab = 'insert';
    this.selectedType = null;

    // TODO: Is there a better way?
    this.$element = $element;
    this.$timeout = $timeout;

    this.formData = [];

    this.newKey = '';
    this.newValue = '';
  }

  updateSelectedType() {
    this.selectedType = this.sharedState.selectedForm.name;
  }

  addRow() {
    this.formData.push({
      'key': this.newKey,
      'value': this.newValue,
    });
    let focusKeyField = !!this.newKey;
    this.newKey = '';
    this.newValue = '';

    // Focus on the newly added row.
    this.$timeout(function () {
      let inputs = this.$element.find('tr:nth-last-child(2)').find('input');
      if (focusKeyField) {
        inputs[0].focus();
      } else {
        inputs[1].focus();
      }
    }.bind(this));
  }

  submit() {
    let type = this.sharedState.selectedForm.name;
    Data.insert(toJson(this.formData, type));
    this.formData = [];
  }

  deleteDocument(document) {
    Data.remove(document._id);
  }
}

const name = 'formView';

export default angular.module(name, [
  angularMeteor,
  SharedState.name,
])
  .component(name, {
    templateUrl: 'imports/components/formView/formView.html',
    controller: ['$element', '$scope', '$timeout', SharedState.name, FormViewCtrl],
    controllerAs: name,
  });
