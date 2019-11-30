(function() {
    'use strict';
    angular.module('app').directive('onReadFile', onReadFile);

    /* @ngInject */
    function onReadFile($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                $fileContent:  onLoadEvent.target.result.split(',')[1]

                        });
                    });
                };
                reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    }
})();