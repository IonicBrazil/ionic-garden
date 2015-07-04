angular
  .module('starter.state.single', ['starter.state.single.controller'])
  .config(configSingle);

/**
 * Define Single Route
 */
function configSingle($stateProvider) {
  $stateProvider.state('app.single', {
    url: '/single/:singleId',
    views: {
      'menuContent': {
        templateUrl: 'states/single/template.html',
        controller: 'SingleController as vm'
      }
    }
  });
}
