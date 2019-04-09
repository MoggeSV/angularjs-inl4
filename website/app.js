
var app = angular
    .module("angularApp", ["ngRoute"])
    
    .config(function($routeProvider) {
        $routeProvider
        .when("/", { 
            templateUrl: "views/grid.view.html"  
        })

        .when("/gridview", { 
            templateUrl: "views/grid.view.html"
        })

        .when("/listview", { 
            templateUrl: "views/list.view.html"
        })
    
    })
    
    .controller("angularController", function($scope, $http) {
        
        //Setting products
        $http.get("http://localhost:5000/api/products")
            .then((res) => $scope.products = res.data)
        

        //Sets row limits
        $scope.rowLimit = 5;

        //Sets grid or list active button
        $scope.cardActive = true;

        //Sets stars
        $scope.rating = function(input) {
            
            return `${Math.round(((input / 5) * 100) / 10) * 10}%`;
        }

        //Sorting products
        $scope.sortColumn = "-rating";
    
        $scope.sortData = function (sortBy) {
            $scope.sortColumn = sortBy;
        }



    })
    