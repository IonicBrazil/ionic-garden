angular
  .module('ionicGarden.shared.ig-button-loading', [
    'ionicGarden.shared.ig-button-loading.controller',
    'ionicGarden.shared.wait'
  ])
  .directive('igLoading', igLoading);

/**
 * Directive Definition
 */
function igLoading() {
  var directive = {
    restrict: 'E',
    scope: {
      duration: '=duration',
      noBackdrop: '=noBackdrop',
      hideOnStateChange: '=hideOnStateChange',
      hideOn: '=hideOn'
    },
    link: link,
    controller: 'IGButtonLoadingController',
    controllerAs: 'ig',
    bindToController: true
  };

  return directive;

  /**
   * Directive Link Function
   */
  function link(scope, element, attr, controller) {
    controller.link(scope, element, attr);
  }
}
