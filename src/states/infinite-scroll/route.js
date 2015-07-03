(function() {
  'use strict';
  angular.module('starter.state.infinite-scroll', ['starter.state.infinite-scroll.controller'])

  .config(configInfiniteScroll);

  configInfiniteScroll.$inject(['$stateProvider']);

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
})();
