(function(){
    'use strict';
    angular.module('app').directive('asistentesedit', asistentesedit);
        function asistentesedit(){
            return{
                templateUrl: 'app/asistentes/asistentesedit/asistentesedit.html',
                restrict: 'EA',
                controller: 'AsistentesupdCtrl',
                controllerAs: 'vm'
            }
        }
})();