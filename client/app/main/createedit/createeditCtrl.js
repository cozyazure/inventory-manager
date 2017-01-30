(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.product = $stateParams.createeditData;
            $scope.createEditTitle = $scope.product === null ? 'Create New Product' : 'Edit Product'; 
        }])
})();