'use strict';

angular.module('testfullstackApp')
  .controller('RegisterCtrl', ['$scope', 'Auth', '$location', '$window',
    function ($scope, Auth, $location, $window) {
      var vm = this;
      vm.user = {};
      vm.errors = {};

      vm.fnRegister = function (form) {
        vm.submitted = true;

        if (form.$valid) {
          Auth.createUser({
            name: vm.user.name,
            email: vm.user.email,
            password: vm.user.password
          })
            .then(function () {
              // Account created, redirect to home
              $location.path('/');
            })
            .catch(function (err) {
              err = err.data;
              vm.errors = {};

              // Update validity of form fields that match the mongoose errors
              angular.forEach(err.errors, function (error, field) {
                form[field].$setValidity('mongoose', false);
                $scope.errors[field] = error.message;
              });
            });
        }
      };

      vm.fnLoginOauth = function (provider) {
        $window.location.href = '/auth/' + provider;
      }
    }
  ]);
