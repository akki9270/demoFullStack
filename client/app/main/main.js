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
      })
      .state('main.charts', {
        url: '/demos/charts',
        authenticate: true,
        templateUrl: 'app/demos/charts/charts.html',
        controller: 'ChartsCtrl',
        controllerAs:'chart'
      })
      .state('main.maps', {
        url: '/demos/maps',
        authenticate: true,
        templateUrl: 'app/demos/map/maps.html',
        controller: 'MapsCtrl',
        controllerAs:'map'
      });
  });
