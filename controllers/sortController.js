app.controller("sortController", function ($scope, $rootScope) {
    $rootScope.sortColumn = "name";
    $rootScope.reverseSort = false;

    $rootScope.sortData = function (sortBy) {
        $rootScope.reverseSort = ($rootScope.sortColumn == sortBy) ? !$rootScope.reverseSort : false;
        $rootScope.sortColumn = sortBy;
    }
});