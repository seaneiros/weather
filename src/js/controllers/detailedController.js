angular.module('weather')
	.controller('DetailedForecastCtrl',['$scope', 'dataFetcher', function($scope, dataFetcher) {
		$scope.appState.changeTab('detailed');
		dataFetcher.fetchData();
	}]);