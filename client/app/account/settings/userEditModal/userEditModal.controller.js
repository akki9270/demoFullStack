'use strict';

angular.module('testfullstackApp')
  .controller('UserEditModalCtrl', ['user', '$mdDialog', 'User', 'toastr',
    function (user, $mdDialog, User, toastr) {
      var vm = this;
      vm.currentUser = user;

      vm.fnCloseModal = function () {
        $mdDialog.cancel();
      };

      vm.fnUpdateUser = function () {
        User.update(vm.currentUser, function () {
          toastr.success('User updated successfully');
          $mdDialog.hide();
        });
      }
    }]);
