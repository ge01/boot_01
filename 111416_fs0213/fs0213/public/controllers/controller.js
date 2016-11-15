var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  $http.get('/fs0213').success(function(response){
    console.log("I got the data requested");
    $scope.fs0213 = response;
  });


}]);
