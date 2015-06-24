(function() {
  'use strict';
  angular.module('starter.state.search', [])

    .config(function ($stateProvider) {
      $stateProvider

        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'states/search/template.html'
            }
          }
        });
    });
})();
