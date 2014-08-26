'use strict';

angular.module('mean.outbreakdata').controller('OutbreakdataController', ['$scope', 'Global', 'Outbreakdata',
  function($scope, Global, Outbreakdata) {
    $scope.global = Global;
    $scope.package = {
      name: 'outbreakdata'
    };
    $scope.outbreakdata = Outbreakdata.query();
  }
]);
