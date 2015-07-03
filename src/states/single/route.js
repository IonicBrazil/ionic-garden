(function() {
  'use strict';
  angular.module('starter.state.single', ['starter.state.single.controller'])

    .config(configSingle);

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
})();
