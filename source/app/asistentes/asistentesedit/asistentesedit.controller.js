(function () {
    'use strict';
    angular.module('app').controller('AsistentesupdCtrl', AsistentesupdCtrl);
    AsistentesupdCtrl.$inject = ['Asistentes', '$location', '$mdToast', '$stateParams'];
    function AsistentesupdCtrl(Asistentes, $location, $mdToast, $stateParams) {      
        var vm = this;
        console.log("Hola desde el controler update");

        var id = $stateParams.id;
        vm.asistente = Asistentes.get({id:id})

        vm.UpdAsistente = function() {
            Asistentes.update(vm.asistente).$promise.then(function () {
                $location.url('/asistentes');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.data)
                    .position('bottom right')
                );
            }, function (error){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.data)
                    .position('bottom right')
                );
            });
        }
    }
})();