(function(){
    'use strict';
    angular.module('app').directive('asistenteslist', asistenteslist);
        function asistenteslist(){
            return{
                templateUrl: 'app/asistentes/asistenteslist/asistenteslist.html',
                restrict: 'EA',
                controller: 'AsistentesListCtrl',
                controllerAs: 'vm'
            }
        }
})();