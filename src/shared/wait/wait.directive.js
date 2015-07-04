angular
  .module('ionicGarden.shared.wait', [])
  .directive('wait', ['$timeout', '$state', Wait]);

/**
 * Directive Definition
 */
function Wait($timeout, $state) {
  var directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  /**
   * Directive Link Function
   */
  function link(scope, element, attr, controller) {
    element.on('click', click);

    /**
     * Timeout andGo function when clicked
     */
    function click() {
      console.log(attr.wait);
      $timeout(andGo, attr.wait);
    }

    function andGo() {
      $state.go(attr.andGo);
    }
  }
}
