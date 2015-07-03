(function() {
  'use strict';
  angular.module('starter.state.sidemenu.controller', [])

    .controller('SidemenuController', SidemenuController);

  SidemenuController.$inject = ['$scope', '$ionicModal', '$timeout'];

  function SidemenuController($scope, $ionicModal, $timeout) {
    var vm = this;

    // Form data for the login modal
    vm.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('modals/login.html', {
      scope: $scope
    }).then(function(modal) {
      vm.modal = modal;
      $scope.vm = vm;
    });

    // Triggered in the login modal to close it
    vm.closeLogin = function() {
      vm.modal.hide();
    };

    // Open the login modal
    vm.login = function() {
      vm.modal.show();
    };

    // Perform the login action when the user submits the login form
    vm.doLogin = function() {
      console.log('Doing login', vm.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        vm.closeLogin();
      }, 1000);
    };
  }
})();
