(function() {
  'use strict';
  angular.module('starter.state.single.controller', [])

    .controller('SingleCtrl', function ($scope, $state) {
      $scope.id = $state.params.singleId;
    });
})();
