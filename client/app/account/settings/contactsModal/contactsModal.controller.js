'use strict';

angular.module('testfullstackApp')
  .controller('ContactsModalCtrl',ContactsModalController);

  /** @ngInject */
  function ContactsModalController($mdDialog, contacts, user){

      var vm = this;
      vm.contactsArray = contacts ;
      vm.currentUser = user;

    vm.fnCloseModal = function(){
      $mdDialog.cancel();
    }
  }
