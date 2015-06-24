angular.module('starter.state.sidemenu', ['starter.state.sidemenu.controller'])

.config(function($stateProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'js/states/sidemenu/template.html',
    controller: 'AppCtrl'
  })
});
