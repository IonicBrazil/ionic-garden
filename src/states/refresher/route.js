(function() {
  'use strict';
  angular.module('starter.state.refresher', ['starter.state.refresher.controller'])

  .config(configRefresher);

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
})();
