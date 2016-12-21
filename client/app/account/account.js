'use strict';

angular.module('testfullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        authenticate:false
      })
      .state('main.register', {
        url: '/register',
        templateUrl: 'app/account/register/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register',
        authenticate:false
      })
      .state('main.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs:'settings',
        authenticate: true
      });
  });
