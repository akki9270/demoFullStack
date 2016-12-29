'use strict';

angular.module('testfullstackApp')
  .controller('UserEditModalCtrl', UserEditModalController);

    /** @ngInject */
    function UserEditModalController(user, $mdDialog, User, toastr){

      var vm = this;
      vm.currentUser = user;

      vm.fnCloseModal = function(){
        $mdDialog.cancel();
      };

      vm.fnUpdateUser = function(){
        User.update(vm.currentUser,function(){
          toastr.success('User updated successfully');
          $mdDialog.hide();
        });
      }
    }
