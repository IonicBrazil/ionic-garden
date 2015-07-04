angular
  .module('starter.configureStatusBar', [])
  .run(configStatusBar);

/**
 * Configure Status Bar style
 */
function configStatusBar($ionicPlatform) {
  $ionicPlatform.ready(platformReady);

  /**
   * Configure StatusBar plugin
   */
  function platformReady() {
    if (window.StatusBar) {
      StatusBar.styleDefault()
    }
  }
}
