(function() {
  'use strict';
  angular.module('wsmd38')
    .factory('BookResource', BookResource);

  BookResource.$inject = ['$resource'];

  function BookResource($resource) {
    return $resource('http://localhost:3000/api/books/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
