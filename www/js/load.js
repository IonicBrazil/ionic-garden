$script([
  'js/app.js',
  'js/modules/configure-keyboard.js',
  'js/modules/configure-status-bar.js',
  'js/states/sidemenu/route.js',
  'js/states/sidemenu/controller.js',
  'js/states/search/route.js',
  'js/states/browse/route.js',
  'js/states/playlists/route.js',
  'js/states/playlists/controller.js',
  'js/states/single/route.js',
  'js/states/single/controller.js',
  'js/states/index/route.js'
], function() {
  angular.bootstrap(document.body, ['starter']);
});
