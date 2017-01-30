(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
            console.log('hello',$stateParams);
            $scope.product = $stateParams.createeditData;
            $scope.createEditTitle = $scope.product === null ? 'Create New Product' : 'Edit Product'; 
        }])
})();