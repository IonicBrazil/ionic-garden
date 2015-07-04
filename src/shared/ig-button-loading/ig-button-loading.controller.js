angular
  .module('starter.shared.ig-button-loading.controller', [])
  .controller('IGButtonLoadingController', IGButtonLoadingController);

IGButtonLoadingController.$inject = ['$scope', '$state', '$timeout', '$ionicLoading'];

var DEFAULT_LOADING_OPTIONS = {
  noBackdrop: false,
  hideOnStateChange: false,
  delay: 0,
  duration: undefined
};

/**
 * Controller Definition
 */
function IGButtonLoadingController($scope, $state, $timeout, $ionicLoading) {

  $scope.ig = $scope.ig;
  console.log($scope.ig);

  $scope.$on('$destroy', destroy);

  /**
   * Scope Destroy
   */
  function destroy() {
    console.log('igLoading $destroy');
  }

  /**
   * Show loading
   */
  function show() {
    $ionicLoading.show(DEFAULT_LOADING_OPTIONS);
  }

  /**
   * Show loading with no backdrop option
   */
  function showNoBackdrop() {
    $ionicLoading.show({
      template: $scope.title,
      noBackdrop: true
    });
  }

  /**
   * Hide loading
   */
  function hideLoading() {
    $ionicLoading.show();
  }
}
