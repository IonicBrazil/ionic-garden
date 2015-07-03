(function() {
  'use strict';
  angular.module('starter.state.single.controller', [])

    .controller('SingleController', SingleController);

  SingleController.$inject = ['$state'];

  function SingleController($state) {
    var vm = this;

    vm.id = $state.params.singleId;
  }
})();
