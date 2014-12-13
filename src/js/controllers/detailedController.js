angular.module('weather')
	.controller('DetailedForecastCtrl',['$scope', function($scope, $routeParams) {
		$scope.appState.changeTab('detailed');
	}]);