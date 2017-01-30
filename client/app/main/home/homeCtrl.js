(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('homeCtrl', ['$scope', 'Resource', function($scope, Resource) {
            Resource.GetInventoryList().then((response) => {
                $scope.inventoryList = response.data;
            })
            $scope.inventoryList = [];

            $scope.orderByField = 'id';
            $scope.reverseSort = false;

            $scope.deleteInventory = id =>{
                Resource.DeleteInventoryById(id).then(response=>{
                    console.log('deleted',response);
                })
            }
        }])
})();