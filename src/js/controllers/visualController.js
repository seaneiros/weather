angular.module('weather')
	.controller('VisualForecastCtrl',['$scope', 'dataFetcher', function($scope, dataFetcher) {
		$scope.appState.changeTab('visual');
		dataFetcher.fetchData();
	}]);