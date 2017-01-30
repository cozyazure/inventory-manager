(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$state', '$stateParams', 'Resource', function($scope, $state, $stateParams, Resource) {
            $scope.product = $stateParams.createeditData;
            $scope.createEditTitle = $scope.product === null ? 'Create New Product' : 'Edit Product';
            $scope.isCreateNew = $scope.product === null ? true : false;
            $scope.updateInventory = inventory => {
                Resource.UpdateInventory(inventory).then(response => {
                    $state.go('main.home');
                });
            }
            $scope.createInventory = inventory => {
                Resource.CreateInventory(inventory).then(response => {
                    $state.go('main.home');
                });
            }
        }])
})();