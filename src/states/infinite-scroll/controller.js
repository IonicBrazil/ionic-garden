angular
  .module('ionicGarden.state.infinite-scroll.controller', [])
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

    $timeout(loadComplete, 1500);

    /**
     * Called when the load is finished
     */
    function loadComplete() {
      $scope.vm.list = getList(total);
      $scope.$broadcast('scroll.refreshComplete');
    }
  }

  $scope.vm = vm;
}
