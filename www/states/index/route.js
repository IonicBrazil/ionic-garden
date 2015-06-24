(function() {
  'use strict';
  angular.module('starter.state.index', [])

    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/app/playlists');
    });
})();
