angular
  .module('ionicGarden.state.sidemenu.controller', [])
  .controller('SidemenuController', SidemenuController);

SidemenuController.$inject = ['$scope', '$ionicModal', '$timeout'];

/**
 * Define Sidemenu Controller
 */
function SidemenuController($scope, $ionicModal, $timeout) {
  var vm = this;

  // Form data for the login modal
  vm.loginData = {};
  vm.closeLogin = closeLogin;
  vm.login = login;
  vm.doLogin = doLogin;

  /**
   * Create the login modal that we will use later
   */
  $ionicModal.fromTemplateUrl('modals/login.html', {
    scope: $scope
  }).then(resolveModal, rejectModal);

  /**
   * Modal successful created
   */
  function resolveModal(modal) {
    vm.modal = modal;
    $scope.vm = vm;
  }

  /**
   * Log an error if the modal is rejected
   */
  function rejectModal(err) {
    console.error('Modal reject: ', err);
  }

  /**
   * Triggered in the login modal to close it
   */
  function closeLogin() {
    vm.modal.hide();
  }

  /**
   * Open the login modal
   */
  function login() {
    vm.modal.show();
  }

  /**
   * Perform the login action when the user submits the login form
   */
  function doLogin() {
    console.log('Doing login', vm.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(delayLoad, 1000);

    /**
     * Closes the modal
     */
    function delayLoad() {
      vm.closeLogin();
    }
  }
}
