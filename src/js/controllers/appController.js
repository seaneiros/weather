angular.module('weather')
	.controller('AppController',['$scope', '$http', '$routeParams', 'applicationState',
		function($scope, $http, $routeParams, applicationState) {
			$scope.appState = applicationState;
		}]);