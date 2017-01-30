(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('homeCtrl', ['$scope', '$state', 'Resource', function($scope,$state, Resource) {
            Resource.GetInventoryList().then((response) => {
                $scope.inventoryList = response.data;
            })
            $scope.inventoryList = [];

            $scope.orderByField = 'id';
            $scope.reverseSort = false;

            $scope.deleteInventory = id =>{
                Resource.DeleteInventoryById(id).then(response=>{
                    $state.reload();
                })
            }
        }])
})();