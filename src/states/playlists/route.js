(function() {
  'use strict';
  angular.module('starter.state.playlists', ['starter.state.playlists.controller'])

    .config(configPlayelists);

  function configPlayelists($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'states/playlists/template.html',
            controller: 'PlaylistsController'
          }
        }
      });
  }
})();
