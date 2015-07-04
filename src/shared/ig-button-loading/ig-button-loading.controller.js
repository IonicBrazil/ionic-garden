angular
  .module('starter.shared.ig-button-loading.controller', [])
  .controller('IGButtonLoadingController', IGButtonLoadingController);

IGButtonLoadingController.$inject = ['$scope', '$element', '$state', '$timeout', '$ionicLoading'];

var DEFAULT_LOADING_OPTIONS = {
  noBackdrop: false,
  hideOnStateChange: false,
  delay: 0,
  duration: undefined
};

/**
 * Controller Definition
 */
function IGButtonLoadingController($scope, $element, $state, $timeout, $ionicLoading) {

  var vm = this;
  vm.link = link
  vm.show = show
  vm.hide = hide

  $scope.$on('$destroy', destroy);

  function link() {
    $element.on('click', show);
  }

  /**
   * Scope Destroy
   */
  function destroy() {
    $element.off('click');
  }

  /**
   * Show loading
   */
  function show() {
    $ionicLoading.show($scope.ig);

    // console.log('show', $scope, $element);

    if ($scope.ig.hideOn > 0) {
      $timeout(hide, $scope.ig.hideOn);
    }
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
  function hide() {
    $ionicLoading.hide();
  }
}
