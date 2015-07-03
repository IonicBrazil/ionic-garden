(function () {
  angular
      .module('starter.shared.ig-button-loading', ['starter.shared.ig-button-loading.controller'])
      .directive('igLoading', igLoading);

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

    function link(scope, element, attr, controller) {
      scope.ig.count = 0;
      scope.ig.time = Date.now();

//      console.log(scope.ig)

      element.on('click', function () {
        console.log('igLoading $destroy', scope.ig.time, scope.ig.count++);
      })
    }
  }

}())
