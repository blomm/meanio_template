'use strict';

angular.module('mean.outbreakdata').factory('Outbreakdata', [ '$resource',
  function($resource) {
    return $resource('outbreakdata/:outbreakId', {
      outbreakId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
