(() => {
    'use strict';
    angular.module('inventory-manager')
        .controller('homeCtrl', ['$scope', function($scope) {
            $scope.inventoryList = [{
                    id: 1,
                    name: "Canned Tomato",
                    category: 'Canned food',
                    quantity: 78,
                    price: 13.59,
                },
                {
                    id: 2,
                    name: "Soy bean",
                    category: 'Drinks',
                    quantity: 11,
                    price: 4.80,
                },
                {
                    id: 3,
                    name: "Magnum Ice-cream",
                    category: 'Dessert',
                    quantity: 20,
                    price: 2.6,
                },
                {
                    id: 4,
                    name: "Kimchi",
                    category: 'Canned food',
                    quantity: 536,
                    price: 14.5,
                },
                {
                    id: 5,
                    name: "Bottle Ketchup",
                    category: 'Spices',
                    quantity: 91,
                    price: 8.9,
                },
                {
                    id: 6,
                    name: "Baked beans",
                    category: 'Canned food',
                    quantity: 62,
                    price: 1.10,
                },
                {
                    id: 7,
                    name: "Bottled Pepper",
                    category: 'Spices',
                    quantity: 251,
                    price: 22.00,
                },
                {
                    id: 8,
                    name: "Belacan",
                    category: 'Spices',
                    quantity: 87,
                    price: 42.3,
                },

                {
                    id: 9,
                    name: "Mr Potato Fried Chips",
                    category: 'Snacks',
                    quantity: 332,
                    price: 2.9,
                },
                {
                    id: 10,
                    name: "Double Decker Crackers",
                    category: 'Snacks',
                    quantity: 872,
                    price: 0.45,
                },
                {
                    id: 11,
                    name: "Rice Cake",
                    category: 'Dry food',
                    quantity: 318,
                    price: 2.62,
                },
                {
                    id: 12,
                    name: "Ramen",
                    category: 'Dry food',
                    quantity: 419,
                    price: 4.2,
                }                
            ]

            $scope.orderByField = 'id';
            $scope.reverseSort = false;
        }])
})();