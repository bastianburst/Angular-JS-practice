(function () {
    'use strict';
    angular.module('app').controller('AsistentesListCtrl', AsistentesListCtrl);
    AsistentesListCtrl.$inject = ['Asistentes', '$mdToast'];
    function AsistentesListCtrl(Asistentes, $mdToast) {
        var vm = this;
        vm.query = {
            order: 'name',
            limit: 20,
            page: 1
        };
        console.log("Hola desde el controler");

        getAsistentes();
        function getAsistentes() {
            Asistentes.query().$promise.then(function (data) {
                vm.asistentes = data;
                console.log(data);
            });
        }

        vm.eliminar = function(id) {
            console.log("erase");
            Asistentes.remove({
                id: id
            }).$promise.then(function () {
                getAsistentes();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('eliminado')
                        .position('bottom right'));
            }, function (error) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(error.data)
                        .position('bottom right'));

            });
        }

    }
})();