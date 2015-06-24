angular.module('starter.state.search', [])

.config(function($stateProvider) {
  $stateProvider

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'js/states/search/template.html'
      }
    }
  })
})
