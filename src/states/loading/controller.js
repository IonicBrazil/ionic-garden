angular
  .module('ionicGarden.state.loading.controller', [])
  .controller('LoadingController', LoadingController);

LoadingController.$inject = ['$scope', '$state', '$timeout', '$ionicLoading'];

/**
 * Define Loading Controller
 */
function LoadingController($scope, $state, $timeout, $ionicLoading) {
  $scope.title = 'Loading';
}
