angular
  .module('ionicGarden.state.single.controller', [])
  .controller('SingleController', SingleController);

SingleController.$inject = ['$state'];

/**
 * Define Single Controller
 */
function SingleController($state) {
  var vm = this;

  vm.title = 'Playlist';

  vm.id = $state.params.singleId;
}
