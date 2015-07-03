(function() {
  'use strict';

  angular.module('starter.configureKeyBoard', [
    'ionic'
  ])

  .run(configKeyBoard);

  function configKeyBoard($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
    });
  }

})();
