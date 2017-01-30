(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
            console.log('hello',$stateParams);
        }])
})();