app.controller("searchController", function($scope) {
    $scope.products = products;
    $scope.search = function (item) {
        if($scope.searchText == undefined) {
            return true;
        }
        else {
            if(
                item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.rating.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            }
        }

        return false;
    }
});