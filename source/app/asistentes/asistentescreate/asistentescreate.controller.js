(function () {
    'use strict';
    angular.module('app').controller('AsistentesCreateCtrl', AsistentesCreateCtrl);
    AsistentesCreateCtrl.$inject = ['Asistentes', '$location', '$mdToast'];
    function AsistentesCreateCtrl(Asistentes, $location, $mdToast) {
        var vm = this;
        console.log("Hola desde el controler create");

        vm.createAsistente = function() {
            vm.asistente.estado = 1;
            Asistentes.save(vm.asistente).$promise.then(function () {
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