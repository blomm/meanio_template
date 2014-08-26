'use strict';

angular.module('mean.outbreakdata').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('outbreakdata example page', {
      url: '/outbreakdata/example',
      templateUrl: 'outbreakdata/views/index.html'
    });
  }
]);
