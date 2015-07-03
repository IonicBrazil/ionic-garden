(function() {
  'use strict';
  angular
    .module('starter.state.spinners.controller', [])
    .controller('SpinnersController', SpinnersController);

  SpinnersController.$inject = ['$scope', '$state', '$timeout'];

  var total = 10;

  function SpinnersController($scope, $state, $timeout) {
    var vm = this;

    vm.title = 'Spinners';
    vm.list = getList();
    vm.loadMore = loadMore;
    vm.isChecked = true;

    function getList(limit) {
      var dados = [];
      for (var i = limit; i >= 0; i--) {
        dados[i] = i;
      };

      return dados;
    }

    function loadMore() {
      total = total + 20;

      $timeout(function () {
        $scope.vm.list = getList(total);
        $scope.$broadcast('scroll.refreshComplete');
      }, 1500);
    }

    $scope.vm = vm;
  }
})();
