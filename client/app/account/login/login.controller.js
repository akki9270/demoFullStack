'use strict';

angular.module('testfullstackApp')
  .controller('LoginCtrl', LoginController);
LoginController.$inject = ['$scope', 'Auth', '$location', '$window'];

function LoginController($scope, Auth, $location, $window) {
  var vm = this;
  vm.user = {};
  vm.errors = {};

  vm.fnLogin = function (form) {
    vm.submitted = true;

    if (form.$valid) {
      Auth.login({
        email: vm.user.email,
        password: vm.user.password
      })
        .then(function () {
// Logged in, redirect to home
          $location.path('/contacts');
        })
        .catch(function (err) {
          $scope.errors.other = err.message;
        });
    }
  };

  vm.fnLoginOauth = function (provider) {
    $window.location.href = '/auth/' + provider;
  };
}
