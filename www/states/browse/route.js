angular.module('starter.state.browse', [])

.config(function($stateProvider) {
  $stateProvider

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'states/browse/template.html'
      }
    }
  });
});
