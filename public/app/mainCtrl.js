angular.module('chat')
.controller('mainCtrl', function($scope, mainService) {
$scope.broken = mainService.broken;
$scope.heylo = 'heylo';



})
