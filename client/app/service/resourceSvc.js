(() => {
    'use strict';
    angular.module('inventory-manager')
        .factory('Resource', ['$http', function($http) {
            var apiendpoint = '/api';
            var getInventoryList = () => {
                return $http.get(apiendpoint + '/inventorylist');
            }
            return {
                GetInventoryList: getInventoryList
            };
        }]);
})();