(function() {
  'use strict';
  angular.module('starter.state.infinite-scroll', ['starter.state.infinite-scroll.controller'])

  .config(configinfiniteScroll);

  // configinfiniteScroll.$inject(['$stateProvider']);

  function configinfiniteScroll($stateProvider) {
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
