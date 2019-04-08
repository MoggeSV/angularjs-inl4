app.controller("ratingController",function ($scope) {

    $scope.products = products;
    $scope.rating = function(input) {
        
        return `${Math.round(((input / 5) * 100) / 10) * 10}%`;
    }
})