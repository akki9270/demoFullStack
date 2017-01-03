'use strict';

angular.module('testfullstackApp')
  .controller('LoginCtrl', ['$scope', 'Auth', '$location', '$window', 'toastr',
    function ($scope, Auth, $location, $window, toastr) {
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
            .then(function (res) {
// Logged in, redirect to home
              toastr.success('Welcome ' + res.name);
              $location.path('/contacts');
            })
            .catch(function (err) {
              toastr.error('Email and/or password incorrect', 'Login fail');
              $scope.errors.other = err.message;
            });
        }
      };

      vm.fnLoginOauth = function (provider) {
        $window.location.href = '/auth/' + provider;
      };
    }]);
