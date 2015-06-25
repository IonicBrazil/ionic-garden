(function() {
  'use strict';
  angular.module('starter.state.single.controller', [])

    .controller('SingleController', SingleController);

  function SingleController($scope, $state) {
    $scope.id = $state.params.singleId;
  }
})();
