'use strict';

angular.module('testfullstackApp')
       .controller('ContactsCtrl',ContactController);

  //ContactController.$inject = ['User','Auth','$mdDialog'];
/** @ngInject*/
  function ContactController(User, Auth, $mdDialog, socket, Contacts, toastr){
    var vm = this;
    vm.currentUser = Auth.getCurrentUser();

    vm.fnAddContactModal = function(contact){
      $mdDialog.show({
          templateUrl:'/app/contacts/contact/contact.html',
         controller:'ContactCtrl',
        controllerAs:'cont',
        locals:{user:vm.currentUser,contact:angular.copy(contact)}
      })
    };

        vm.fnDeleteContact = function (ev, id) {
          var confirm = $mdDialog.confirm()
            .title('Would you like to delete this contact ?')
            .ariaLabel('DELETE')
            .targetEvent(ev)
            .ok('DELETE')
            .cancel('CANCEL');
          $mdDialog.show(confirm).then(function () {
            Contacts.remove({id: id}, function () {
              toastr.success('Contact removed successfully.');
            }, function () {
              toastr.error('Contact not remove');
            });
          });
        };

        vm.fnInitContacts  = function(){
        Auth.isLoggedInAsync(function(isLoggedinAsync){
          if(isLoggedinAsync){
            User.getContacts({id: vm.currentUser._id},function(data) {
                vm.contactsArray = data ;
              socket.syncUpdates('contacts',vm.contactsArray);
            })
          }
        })
    };

    vm.fnInit = function(){
      vm.fnInitContacts();
    }
  }
