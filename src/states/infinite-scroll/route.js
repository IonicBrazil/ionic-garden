angular
  .module('ionicGarden.state.infinite-scroll', ['ionicGarden.state.infinite-scroll.controller'])
  .config(configInfiniteScroll);

/**
 * Define Infinite Scroll Route
 */
function configInfiniteScroll($stateProvider) {
  $stateProvider.state('app.infinite-scroll', {
    url: '/infinite-scroll',
    views: {
      'menuContent': {
        templateUrl: 'states/infinite-scroll/template.html',
        controller: 'InfiniteScrollController'
      }
    }
  });
}
