(function() {
  'use strict';
  angular.module('starter.state.loading', [
    'starter.state.loading.controller',
    'starter.shared.ig-button-loading'
  ]).config(configRefresher);

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
})();
