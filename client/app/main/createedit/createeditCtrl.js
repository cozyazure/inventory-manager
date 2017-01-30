(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$state','$stateParams', 'Resource', function($scope, $state, $stateParams, Resource) {
            $scope.product = $stateParams.createeditData;
            $scope.createEditTitle = $scope.product === null ? 'Create New Product' : 'Edit Product';
            $scope.updateInventory = inventory => {
                Resource.UpdateInventory(inventory).then(response => {
                    console.log('update successful', response)
                });
            }
            $scope.createInventory = inventory => {
                Resource.CreateInventory(inventory).then(response => {
                    console.log('create successful', response);
                    $state.go('main.home');
                });
            }
        }])
})();