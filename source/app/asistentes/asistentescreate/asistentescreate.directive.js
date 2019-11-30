(function(){
    'use strict';
    angular.module('app').directive('asistentescreate', asistentescreate);
        function asistentescreate(){
            return{
                templateUrl: 'app/asistentes/asistentescreate/asistentescreate.html',
                restrict: 'EA',
                controller: 'AsistentesCreateCtrl',
                controllerAs: 'vm'
            }
        }
})();