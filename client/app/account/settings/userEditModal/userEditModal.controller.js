'use strict';

angular.module('testfullstackApp')
  .controller('UserEditModalCtrl', UserEditModalController);

    /** @ngInject */
    function UserEditModalController(user, $mdDialog, User){

      var vm = this;
      vm.currentUser = user;

      vm.fnCloseModal = function(){
        $mdDialog.cancel();
      };

      vm.fnUpdateUser = function(){
        User.update(vm.currentUser,function(){
          $mdDialog.hide();
        });
      }
    }
