var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  $http.get('/fs0215').success(function(response){
    console.log("I got the data I requested");
    $scope.fs0215 = response;
  });




}]);
