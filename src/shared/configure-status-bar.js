(function() {
  'use strict';

  angular.module('starter.configureStatusBar', [
    'ionic'
  ])

  .run(configStatusBar);

  /**
   * Configure Status Bar style
   */
  function configStatusBar($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
})();
