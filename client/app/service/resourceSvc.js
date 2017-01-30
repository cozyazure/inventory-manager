(() => {
    'use strict';
    angular.module('inventory-manager')
        .factory('Resource', ['$http', function($http) {
            var apiendpoint = '/api';
            var getInventoryList = () => {
                return $http.get(apiendpoint + '/GetInventorylist');
            }
            var createInventory = inventory => {
                return $http.post(apiendpoint + '/CreateInventory', inventory);
            }
            var updateInventory = inventory => {
                return $http.put(apiendpoint + '/UpdateInventory/', inventory);
            }
            var deleteInventoryById = id => {
                return $http.delete(apiendpoint + '/DeleteInventoryById/' + id);
            }

            return {
                GetInventoryList: getInventoryList,
                CreateInventory: createInventory,
                UpdateInventory: updateInventory,
                DeleteInventoryById: deleteInventoryById
            };
        }]);
})();