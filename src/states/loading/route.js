angular
  .module('starter.state.loading', [
    'starter.state.loading.controller',
    'starter.shared.ig-button-loading'
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
