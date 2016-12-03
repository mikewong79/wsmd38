(function() {
  'use strict';
  angular.module('wsmd38')
    .controller('BookListController', BookListController)
    .controller('BookNewController', BookNewController)
    .controller('BookShowController', BookShowController)
    .controller('BookEditController', BookEditController);

  BookListController.$inject = ['BookResource'];
  BookNewController.$inject = ['BookResource', '$state'];
  BookShowController.$inject = ['BookResource', '$stateParams'];
  BookEditController.$inject = ['BookResource', '$state', '$stateParams'];

  function BookListController(BookResource) {
    var vm = this;
    vm.books = [];
    vm.deleteBook = deleteBook;

    BookResource.query().$promise.then(function(data) {
      vm.books = data;
    });

    function deleteBook(bookToDelete) {
      BookResource.delete({id:bookToDelete._id}).$promise.then(function(response) {
        if(response.message) {
          console.log(response.message);
          vm.books = vm.books.filter(function(book) {
            return book != bookToDelete;
          });
        }
      });
    }
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

  function BookShowController(BookResource, $stateParams) {
    var vm = this;
    vm.book = {};

    BookResource.get({id: $stateParams.id}).$promise.then(function(jsonBook) {
      vm.book = jsonBook;
    });
  }

  function BookEditController(BookResource, $state, $stateParams) {
    var vm = this;
    vm.book = {};
    vm.updateBook = updateBook;

    BookResource.get({id: $stateParams.id}).$promise.then(function(jsonBook) {
      vm.book = jsonBook;
    });

    function updateBook() {
      BookResource.update(vm.book).$promise.then(function(editedBook) {
        vm.book = editedBook;
        $state.go('booksList');
      });
    }
  }
}());
