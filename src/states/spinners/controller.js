angular
  .module('ionicGarden.state.spinners.controller', [])
  .controller('SpinnersController', SpinnersController);

SpinnersController.$inject = ['$scope', '$state', '$timeout'];

/**
 * Define State Controller
 */
function SpinnersController($scope, $state, $timeout) {
  var total = 10;
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
