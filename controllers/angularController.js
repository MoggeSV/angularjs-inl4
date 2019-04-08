var app = angular
    .module("angularApp", ["ngRoute"])
    
    .config(function($routeProvider) {
        $routeProvider
        .when("/", { 
            templateUrl: "views/grid.view.html",
            controller: "angularController"
    
        })

        .when("/gridview", { 
            templateUrl: "views/grid.view.html",
            controller: "angularController"
    
        })

        .when("/listview", { 
            templateUrl: "views/list.view.html",
            controller: "angularController"
    
        })
    
    })
    
    .controller("angularController", function($rootScope) {
        
        $rootScope.products = products;
    
        $rootScope.rowLimit = {
            "type": "select",
            "name": "rowLimit",
            "value": "5",
            "values": ["5","10","20", "50", "100"]
        };
    })