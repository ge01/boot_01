var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/fsuser').success(function(response){
      console.log("I got the data I requested");
      $scope.fsuser = response;
      $scope.user = "";
    });
  };

  refresh();

  $scope.addUser = function(){
    console.log($scope.user);
    $http.post('/fsuser', $scope.user).success(function(response){
      console.log(response);
      refresh();
    });

  };
}]);
