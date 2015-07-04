angular
  .module('ionicGarden.state.come-back', ['ionicGarden.state.come-back.controller'])
  .config(configComeBack);

/**
 * Define Come Back Route
 */
function configComeBack($stateProvider) {
  $stateProvider.state('app.comeBack', {
    url: '/come-back',
    views: {
      'menuContent': {
        templateUrl: 'states/come-back/template.html',
        controller: 'ComeBackController as vm'
      }
    }
  });
}
