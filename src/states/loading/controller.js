(function() {
  'use strict';
  angular
    .module('starter.state.loading.controller', [])
    .controller('LoadingController', LoadingController);

  LoadingController.$inject = ['$scope', '$state', '$timeout', '$ionicLoading'];

  function LoadingController($scope, $state, $timeout, $ionicLoading) {
    $scope.title = 'Loading';
  }
})();
