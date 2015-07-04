angular
  .module('ionicGarden.state.sidemenu', ['ionicGarden.state.sidemenu.controller'])
  .config(configSidemenu);

/**
 * Define Side Menu Route
 */
function configSidemenu($stateProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/sidemenu/template.html',
    controller: 'SidemenuController as vm'
  });
}
