var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/fs0214').success(function(response){
      console.log("I got the data I requested");
      $scope.fs0214 = response;
      $scope.contact = "";
    });
  };

  refresh();
  //$scope.parseInt = parseInt;

  $scope.addData = function(){

    console.log($scope.data);
    //console.log("Salary: " + $scope.data.salary);
    $scope.data.pay = parseInt($scope.data.salary) + parseInt($scope.data.bonus);

    $http.post('/fs0214', $scope.data).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/fs0214/' + id).success(function(response){
      refresh();
    });
  };
}]);
