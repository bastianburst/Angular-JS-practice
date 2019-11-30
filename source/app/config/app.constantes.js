(function () {
    'use strict';

    angular.module('app.config', [
    ]).constant('BASEURL', 'http://localhost:8080/cmbpalmira/webresources').config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
    function configure($authProvider, BASEURL) {
        $authProvider.loginUrl = BASEURL + '/auth/login';
    }

    //En este módulo se pueden declarar y asignar todas las constantes
    //que se usarán en la aplicación.
//http:192.168.1.134:8080/Sigecutac/webresources
})();
