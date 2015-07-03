(function() {
  'use strict';
  angular.module('starter.state.index', [])

  .config(configIndex);

  /**
   * Define default/index route
   */
  function configIndex($urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/playlists');
  }
})();
