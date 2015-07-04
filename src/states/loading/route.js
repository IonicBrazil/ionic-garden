angular
  .module('ionicGarden.state.loading', [
    'ionicGarden.state.loading.controller',
    'ionicGarden.shared.ig-button-loading'
  ]).config(configRefresher);

/**
 * Define Loading Route
 */
function configRefresher($stateProvider) {
  $stateProvider.state('app.loading', {
    url: '/loading',
    views: {
      'menuContent': {
        templateUrl: 'states/loading/template.html',
        controller: 'LoadingController'
      }
    }
  });
}
