(function() {
  'use strict';
  angular.module('starter.state.sidemenu', ['starter.state.sidemenu.controller'])

    .config(configSidemenu);

  function configSidemenu($stateProvider) {
    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'states/sidemenu/template.html',
      controller: 'SidemenuController as vm'
    });
  }
})();
