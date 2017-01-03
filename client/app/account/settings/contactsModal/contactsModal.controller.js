'use strict';

angular.module('testfullstackApp')
  .controller('ContactsModalCtrl', ['$mdDialog', 'contacts', 'user',
    function ($mdDialog, contacts, user) {
      var vm = this;
      vm.contactsArray = contacts;
      vm.currentUser = user;

      vm.fnCloseModal = function () {
        $mdDialog.cancel();
      }
    }
  ]);
