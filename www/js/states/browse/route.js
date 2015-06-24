angular.module('starter.state.browse', [])

.config(function($stateProvider) {
  $stateProvider

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'js/states/browse/template.html'
      }
    }
  })
})
