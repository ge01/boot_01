var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  $http.get('/fsuser').success(function(response){
    console.log("I got the data I requested");
    $scope.fsuser = response;
  });

  $scope.addUser = function(){
    console.log($scope.user);
  };
}]);
