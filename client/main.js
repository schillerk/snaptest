import angular from 'angular';
import angularMeteor from 'angular-meteor';

// Third-party libraries.
import 'angular-tooltips';

// Services.
import SharedState from '../imports/services/sharedState.js';

// Filters.
import formatJson from '../imports/filters/formatJson.js';
import pluralize from '../imports/filters/pluralize.js';
import formToJson from '../imports/filters/formToJson.js';
import withArticle from '../imports/filters/withArticle.js';

// Directives.
import focusHack from '../imports/directives/focusHack.js';
import ngEnter from '../imports/directives/ngEnter.js';

// Components.
import formList from '../imports/components/formList/formList';
import formView from '../imports/components/formView/formView';

angular.module('snapshot', [
  // Libraries.
  angularMeteor,
  '720kb.tooltips',

  // Services.
  SharedState.name,

  // Filters.
  formatJson.name,
  pluralize.name,
  formToJson.name,
  withArticle.name,

  // Directives.
  focusHack.name,
  ngEnter.name,

  // Components.
  formList.name,
  formView.name,
]);
