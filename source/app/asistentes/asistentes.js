(function (){
    'use strict';
    angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
        .state('asistenteslist', {
            url: '/asistentes',
            template: '<asistenteslist></asistenteslist>'
        })
        .state('asistentescrear',{
            url: '/asistentes/new',
            template: '<asistentescreate></asistentescreate>'
        })
        .state('asistentesactualizar',{
            url: '/asistentes/upd/:id',
            template: '<asistentesedit></asistentesedit>'
        })
    });

})();