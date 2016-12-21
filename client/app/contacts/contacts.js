'use strict';

angular.module('testfullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs:'contacts',
        authenticate: true
      });
  });
