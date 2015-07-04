angular
  .module('ionicGarden.configureKeyBoard', [])
  .run(configKeyBoard);

/**
 * Configure Keyboard
 */
function configKeyBoard($ionicPlatform) {
  $ionicPlatform.ready(platformReady);

  /**
   * Configure Keyboard plugin
   */
  function platformReady() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
  }
}
