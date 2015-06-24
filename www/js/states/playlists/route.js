angular.module('starter.state.playlists', ['starter.state.playlists.controller'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'js/states/playlists/template.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
})
