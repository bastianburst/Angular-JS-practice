(function () {
    'use strict';

    angular.module('app', [
        'templates',
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMaterial',
        'ngFileUpload',
        'ngMessages',
        'satellizer',
        'mdPickers',
        //'angular-encryption',
        'ngCart',
        'vcRecaptcha',
        'ngCsvImport',
        'md.data.table',
        'app.config'
        /*'app.odbcnomina',
        'app.odbcotros',
        
        'app.formuser',
        'app.form',
        'app.login'*/




    ])/*.config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/error');
    });
*/
})();