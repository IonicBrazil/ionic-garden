angular
  .module('starter.state.come-back.controller', [])
  .controller('ComeBackController', ComeBackController);

ComeBackController.$inject = ['$scope', '$timeout', '$ionicHistory'];

/**
 * Define Come Back Controller
 */
function ComeBackController($scope, $timeout, $ionicHistory) {
  $scope.title = 'Wait a second';

  $scope.$on('$ionicView.enter', returnAfter2Seconds);

  /**
   * Return to previous view after two seconds in the current view
   */
  function returnAfter2Seconds() {
    $timeout(next, 1000);

    /**
     * Navigate to previous view
     */
    function next() {
      $ionicHistory.goBack();
    }
  }
}
