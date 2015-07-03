(function() {
  'use strict';
  angular
    .module('starter.state.come-back.controller', [])
    .controller('ComeBackController', ComeBackController);

  ComeBackController.$inject = ['$timeout', '$ionicHistory'];

  /**
   * Define Come Back Controller
   */
  function ComeBackController($timeout, $ionicHistory) {
    var vm = this;
    vm.title = 'Wait a second';

    vm.$on('$ionicView.enter', returnAfter2Seconds);

    /**
     * Return to previous view after two seconds in the current view
     */
    function returnAfter2Seconds() {
      $timeout(function() {
        $ionicHistory.goBack();
      }, 2000);
    }
  }
})();
