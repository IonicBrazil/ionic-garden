(function() {
  'use strict';
  angular
    .module('starter.state.come-back.controller', [])
    .controller('ComeBackController', ComeBackController);

  ComeBackController.$inject = ['$timeout', '$ionicHistory'];

  function ComeBackController($timeout, $ionicHistory) {
    var vm = this;
    vm.title = 'Wait a second';

    vm.$on('$ionicView.enter', returnAfter2Seconds);

    function returnAfter2Seconds() {
      $timeout(function () {
        $ionicHistory.goBack();
      }, 2000);
    }
  }
})();
