(function() {
  'use strict';

  angular.module('starter.configureStatusBar', [
    'ionic'
  ])

  .run(configStatusBar);

  function configStatusBar($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
})();
