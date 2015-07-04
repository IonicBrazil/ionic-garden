angular
  .module('starter.shared.ig-button-loading', ['starter.shared.ig-button-loading.controller'])
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
      hideOnStateChange: '=hideOnStateChange'
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
    scope.ig.count = 0;
    scope.ig.time = Date.now();

    element.on('click', click);

    /**
     * Click in the directive's element
     */
    function click() {
      console.log('igLoading click ', scope.ig.time, scope.ig.count++);
    }
  }
}
