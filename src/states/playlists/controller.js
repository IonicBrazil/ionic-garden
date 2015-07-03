(function() {
  'use strict';
  angular.module('starter.state.playlists.controller', [])

    .controller('PlaylistsController', PlaylistsController);

  function PlaylistsController() {
    var vm = this;

    vm.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  }
})();
