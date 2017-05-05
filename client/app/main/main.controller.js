'use strict';

angular.module('testfullstackApp')
  .controller('MainCtrl',[ '$mdSidenav', '$mdDialog', '$scope', '$location', 'Auth',
    function ($mdSidenav, $mdDialog, $scope, $location, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
      $scope.isDemoClicked = false;

      $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.fnToggleLeft = function() {
      $mdSidenav('left').toggle();
        var rotate = $('.rotate');
        if (rotate.hasClass('fa-rotate-90')) {
          rotate.removeClass('fa-rotate-90');
          $scope.isDemoClicked = false;
        }
      };

      $scope.fnDemoListItemClicked = function(){

      };

      $scope.fnDemoClick = function () {
        $('.rotate').toggleClass('fa-rotate-90');
        $scope.isDemoClicked = !$scope.isDemoClicked;
    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };


  }]);
