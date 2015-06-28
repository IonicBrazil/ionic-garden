(function() {
  'use strict';

  angular.module('starter.state.browse', [])

  .config(configBrowse);

  function configBrowse($stateProvider) {
    $stateProvider
      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'states/browse/browse.html'
          }
        }
      });
  }
})();
