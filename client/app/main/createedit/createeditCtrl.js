(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('createeditCtrl', ['$scope', '$stateParams', 'Resource', function($scope, $stateParams, Resource) {
            $scope.product = $stateParams.createeditData;
            $scope.createEditTitle = $scope.product === null ? 'Create New Product' : 'Edit Product';
            $scope.updateInventory = inventory => {
                Resource.UpdateInventory(inventory).then(response=>{
                    console.log('update successful', response)
                });
            }
        }])
})();