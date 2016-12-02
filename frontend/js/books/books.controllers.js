(function() {
  'use strict';
  angular.module('wsmd38')
    .controller('BookListController', BookListController);

  BookListController.$inject = ['BookResource'];

  function BookListController(BookResource) {
    var vm = this;
    vm.books = [];

    BookResource.query().$promise.then(function(data) {
      vm.books = data;
    });
  }
}());
