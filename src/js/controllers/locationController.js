angular.module('weather')
	.controller('LocationController',['$scope', '$http', '$routeParams', '$location',
		function($scope, $http, $routeParams, $location) {
			$scope.appState.loc($routeParams.location);
			$location.path('/brief');
		}]);