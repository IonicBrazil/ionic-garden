(function() {
  'use strict';
  angular
    .module('starter.state.come-back.controller', [])
    .controller('ComeBackController', ComeBackController);

  ComeBackController.$inject = ['$scope', '$timeout', '$ionicHistory'];

  function ComeBackController($scope, $timeout, $ionicHistory) {
    $scope.title = 'Wait a second';

    $scope.$on('$ionicView.enter', returnAfter2Seconds);

    function returnAfter2Seconds() {
      $timeout(function () {
        $ionicHistory.goBack();
      });
    }
  }
})();
