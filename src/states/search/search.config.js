(function() {
  'use strict';
  angular.module('starter.state.search', [])

    .config(configSearch);

  function configSearch($stateProvider) {
    $stateProvider
      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'states/search/search.html'
          }
        }
      });
  }
})();
