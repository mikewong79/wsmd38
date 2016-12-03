(function() {
  'use strict';

  angular.module('wsmd38')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.html'
      })
      .state('booksList', {
        url: '/books/list',
        templateUrl: 'js/books/book-list.html',
        controller: 'BookListController',
        controllerAs: 'bookListVm'
      })
      .state('booksNew', {
        url: '/books/new',
        templateUrl: 'js/books/book-new.html',
        controller: 'BookNewController',
        controllerAs: 'bookNewVm'
      })
      .state('booksShow', {
        url: '/books/show/:id',
        templateUrl: 'js/books/book-show.html',
        controller: 'BookShowController',
        controllerAs: 'bookShowVm'
      })
      .state('booksEdit', {
        url: '/books/edit/:id',
        templateUrl: 'js/books/book-edit.html',
        controller: 'BookEditController',
        controllerAs: 'bookEditVm'
      });
  }
}());
