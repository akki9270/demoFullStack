'use strict';

angular.module('testfullstackApp')
  .factory('Contacts', Contacts);

    Contacts.$inject = ['$resource'];
function Contacts($resource) {

    return $resource('/api/contacts/:id/:controller', {
        id: '@_id'
      },
      {
        get: {
          method: 'GET',
          params: {
            id:'me'
          }
        },
        update:{
          method:'PUT'
        }
      });
  }
