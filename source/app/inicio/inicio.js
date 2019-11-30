(function(){
  'use strict';

  angular.module('app')
    .config(function ($stateProvider) {
      $stateProvider
        .state('inicio', {
          url: '/',
          template: '<inicio></inicio>'
        });
    });
    
})();