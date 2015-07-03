(function() {
  'use strict';
  angular
    .module('starter.shared.ig-button-loading.controller', [])
    .controller('IGButtonLoadingController', IGButtonLoadingController);

  IGButtonLoadingController.$inject = ['$scope', '$state', '$timeout', '$ionicLoading'];

  var DEFAULT_LOADING_OPTIONS = {
    noBackdrop: false,
    hideOnStateChange: false,
    delay: 0,
    duration: undefined
  }

  function IGButtonLoadingController($scope, $state, $timeout, $ionicLoading) {

    console.log($scope.ig);
    $scope.ig = ionic.extend(DEFAULT_LOADING_OPTIONS, $scope.ig)
    console.log($scope.ig);

    $scope.$on('$destroy', function () {
      console.log('igLoading $destroy');
    });

    function show() {
      $ionicLoading.show(DEFAULT_LOADING_OPTIONS);
    }

    function showNoBackdrop() {
      $ionicLoading.show({
        template: $scope.title,
        noBackdrop: true
      });
    }

    function hideLoading() {
      $ionicLoading.show();
    }
  }
})();
