angular.module('weather')
	.controller('BriefForecastCtrl',['$scope', '$http', '$routeParams', 'dataFetcher',
		function($scope, $http, $routeParams, dataFetcher) {
			$scope.appState.changeTab('brief');
			dataFetcher.fetchData();
	}]);