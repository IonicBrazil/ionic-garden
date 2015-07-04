angular
  .module('ionicGarden.state.index', [])
  .config(configIndex);

/**
 * Define default/index route
 */
function configIndex($urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/playlists');
}
