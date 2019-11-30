(function () {
	'use strict';
	angular.module('app').directive('inicio', inicio);
	function inicio() {
		return {
			templateUrl: 'app/inicio/inicio.html',
			restrict: 'EA',
			controller: 'InicioCtrl',
			controllerAs: 'vm'
		};
	}

})();