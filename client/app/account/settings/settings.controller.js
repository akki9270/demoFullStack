'use strict';

angular.module('testfullstackApp')
  .controller('SettingsCtrl', SettingsController);

/** @ngInject */
function SettingsController(User, Auth, $mdDialog) {
  var vm = this;
  vm.errors = {};
  vm.currentUser = Auth.getCurrentUser();

  vm.fnGetUsers = function () {
    vm.isUserLoading = true;
    Auth.isLoggedInAsync(function (isLoadingAsync) {
      if (isLoadingAsync && Auth.isAdmin()) {
        User.query(function (data) {
          vm.usersArray = data;
          vm.isUserLoading = false;
        }, function (err) {

        })
      }
    })
  };

  vm.fnUpdateUser = function () {
    User.update(vm.currentUser, function (data) {
    }, function (error) {
    })
  };

  vm.fnChangePassword = function () {

    vm.submitted = true;

    console.log(vm.currentUser)
    Auth.changePassword(vm.currentUser.oldPassword, vm.currentUser.newPassword)
      .then(function (data) {
        console.log(data);
        vm.message = 'Password successfully changed.';
      })
      .catch(function (err) {
        changePassword.password.$setValidity('mongoose', false);
        vm.errors.other = 'Incorrect password';
        vm.message = '';
      });

  };

  vm.fnDeleteUser = function (ev, id) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete this contact ?')
      .ariaLabel('DELETE')
      .targetEvent(ev)
      .ok('DELETE')
      .cancel('CANCEL');
    $mdDialog.show(confirm).then(function () {
      User.remove({id: id}, function () {
        vm.fnGetUsers();
        //toastr.success('Contact removed successfully.');
      }, function () {
        //toastr.error('Contact not remove');
      });
    });
  };

  vm.fnOpenContactModal = function (user) {

    Auth.isLoggedInAsync(function (isLoggedinAsync) {
      if (isLoggedinAsync) {
        User.getContacts({id: user._id}, function (data) {
          vm.contactsArray = data;
          $mdDialog.show({
            templateUrl:'/app/account/settings/contactsModal/contctsModal.html',
            controller: 'ContactsModalCtrl',
            controllerAs: 'contactModal',
            locals: {contacts:vm.contactsArray,user:user}
          })
        })
      }
    })
  };

  vm.fnOpenUserEditModal = function(user){
    Auth.isLoggedInAsync(function (isLoggedinAsync) {
      if (isLoggedinAsync) {
          $mdDialog.show({
            templateUrl:'/app/account/settings/userEditModal/userEditModal.html',
            controller:'UserEditModalCtrl',
            controllerAs:'userEdit',
            locals:{user:angular.copy(user)}
          }).then(function(){
            vm.fnGetUsers();
          });
      }
    })
  };
  vm.fnInitSettings = function () {
    vm.fnGetUsers();
  }
}
