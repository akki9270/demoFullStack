'use strict';

angular.module('testfullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        authenticate: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
