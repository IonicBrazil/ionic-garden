(function() {
  'use strict';
  angular
    .module('starter.state.refresher.controller', [])
    .controller('RefresherController', RefresherController);

  RefresherController.$inject = ['$scope', '$state', '$timeout'];

  var total = 10;

  /**
   * Define Refresher Controller
   */
  function RefresherController($scope, $state, $timeout) {
    var vm = this;

    vm.title = 'Refresher';
    vm.list = getList();
    vm.loadMore = loadMore;

    /**
     * Return a list of itens
     */
    function getList(limit) {
      var dados = [];
      for (var i = limit; i >= 0; i--) {
        dados[i] = i;
      }

      return dados;
    }

    /**
     * Load more items in the current state
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
