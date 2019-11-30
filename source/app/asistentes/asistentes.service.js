(function () {
    'use strict';
    angular.module('app').factory('Asistentes', Asistentes);
    Asistentes.$inject = ['$resource', 'BASEURL'];
    function Asistentes($resource, BASEURL) {
        return $resource(BASEURL + '/asistentes/:id', {
            id: '@id'
        }, {
                'update': {
                    method: 'PUT'
                }
            });
    }
})();