(function() {
  'use strict';
  angular.module('starter.state.spinners', ['starter.state.spinners.controller'])

  .config(configRefresher);

  /**
   * Define Spinner Route
   */
  function configRefresher($stateProvider) {
    $stateProvider.state('app.spinners', {
      url: '/spinners',
      views: {
        'menuContent': {
          templateUrl: 'states/spinners/template.html',
          controller: 'SpinnersController'
        }
      }
    });
  }
})();
