var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/fsuser');

    person1 = {
      name: 'Tim',
      email: 'tim@email.com'
    };
    person2 = {
      name: 'Emily',
      email: 'emily@email.com'
    };

    var fsuser = [person1, person2];
    $scope.fsuser = fsuser;
}]);
