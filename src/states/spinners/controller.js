(function() {
  'use strict';
  angular
    .module('starter.state.spinners.controller', [])
    .controller('SpinnersController', SpinnersController);

  SpinnersController.$inject = ['$scope', '$state', '$timeout'];

  var total = 10;
  /**
   * Define State Controller
   */
  function SpinnersController($scope, $state, $timeout) {
    var vm = this;

    vm.title = 'Spinners';
    vm.list = getList();
    vm.loadMore = loadMore;
    vm.isChecked = true;

    /**
     * Get an array of items.
     * @param {Number} limit - Number of items to return
     * @return {Array} - Returns generated array
     */
    function getList(limit) {
      var dados = [];
      for (var i = limit; i >= 0; i--) {
        dados[i] = i;
      }

      return dados;
    }

    /**
     * Used by ion-infinite-scroll to load more itens
     */
    function loadMore() {
      total = total + 20;

      $timeout(function() {
        $scope.vm.list = getList(total);
        $scope.$broadcast('scroll.refreshComplete');
      }, 1500);
    }

    $scope.vm = vm;
  }
})();
