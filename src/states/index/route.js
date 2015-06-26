(function() {
  'use strict';
  angular.module('starter.state.index', [])

    .config(configIndex);

  function configIndex($urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/playlists');
  }
})();
