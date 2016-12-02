(function() {
  'use strict';
  angular.module('wsmd38')
    .controller('BookListController', BookListController)
    .controller('BookNewController', BookNewController);

  BookListController.$inject = ['BookResource'];
  BookNewController.$inject = ['BookResource', '$state'];

  function BookListController(BookResource) {
    var vm = this;
    vm.books = [];

    BookResource.query().$promise.then(function(data) {
      vm.books = data;
    });
  }

  function BookNewController(BookResource, $state) {
    var vm = this;

    vm.newBook = {};
    vm.addBook = addBook;

    function addBook() {
      BookResource.save(vm.newBook).$promise.then(function(jsonBook) {
        vm.newBook = {};
        $state.go('booksList')
      });
    }
  }
}());
