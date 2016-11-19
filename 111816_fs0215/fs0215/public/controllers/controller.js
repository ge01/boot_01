var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/fs0215').success(function(response){
      console.log("I got the data I requested");
      $scope.fs0215 = response;
      $scope.data = "";
    });
  };

  refresh();

  $scope.addData = function(){
    console.log($scope.data);
    $http.post('/fs0215', $scope.data).success(function(response){
      console.log(response);
      refresh();
    });
  };




}]);
