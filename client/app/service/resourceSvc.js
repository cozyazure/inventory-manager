(() => {
    'use strict';
    angular.module('inventory-manager')
        .factory('Resource', ['$http', function($http) {
            var apiendpoint = '/api';
            var getInventoryList = () => {
                return $http.get(apiendpoint + '/GetInventorylist');
            }

            var updateInventory = inventory => {
                console.log('got in',inventory)
                return $http.put(apiendpoint + '/UpdateInventory/', inventory);
            }
            return {
                GetInventoryList: getInventoryList,
                UpdateInventory: updateInventory
            };
        }]);
})();