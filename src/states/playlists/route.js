(function() {
  'use strict';
  angular.module('starter.state.playlists', ['starter.state.playlists.controller'])

    .config(configPlaylists);

  function configPlaylists($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'states/playlists/template.html',
            controller: 'PlaylistsController as vm'
          }
        }
      });
  }
})();
