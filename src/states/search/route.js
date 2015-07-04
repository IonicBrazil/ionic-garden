angular
  .module('starter.state.search', [])
  .config(configSearch);

/**
 * Define Search Route
 */
function configSearch($stateProvider) {
  $stateProvider
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'states/search/template.html'
        }
      }
    });
}
