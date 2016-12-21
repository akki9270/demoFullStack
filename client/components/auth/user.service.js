'use strict';

angular.module('testfullstackApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      update: {
        method: 'PUT'
      },
      getContacts:{
        method:'GET',
        params:{
          controller:'contacts'
        },
        isArray:true
      }
	  });
  });
