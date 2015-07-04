angular
  .module('ionicGarden.state.refresher', ['ionicGarden.state.refresher.controller'])
  .config(configRefresher);

/**
 * Define Refresher Route
 */
function configRefresher($stateProvider) {
  $stateProvider.state('app.refresher', {
    url: '/refresher',
    views: {
      'menuContent': {
        templateUrl: 'states/refresher/template.html',
        controller: 'RefresherController'
      }
    }
  });
}
