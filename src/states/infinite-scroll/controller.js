(function() {
  'use strict';
  angular
    .module('starter.state.infinite-scroll.controller', [])
    .controller('InfiniteScrollController', InfiniteScrollController);

  InfiniteScrollController.$inject = ['$scope', '$state', '$timeout'];

  var total = 10;

  /**
   * Define Infinite Scroll Controller
   */
  function InfiniteScrollController($scope, $state, $timeout) {
    var vm = this;

    vm.title = 'Infinite Scroll';
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
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, 2000);
    }

    $scope.vm = vm;
  }
})();
