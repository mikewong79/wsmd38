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
      });
  }
}());
