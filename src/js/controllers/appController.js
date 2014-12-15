angular.module('weather')
	.controller('AppController',['$scope', '$http', 'dataFetcher', 'applicationState', 'dataFetcher',
		function($scope, $http, $routeParams, applicationState, dataFetcher) {
			var coords;
			$scope.appState = applicationState;
			navigator.geolocation.getCurrentPosition(function(result) {
				coords = result.coords;
				$http.get('http://ekb.shri14.ru/api/geocode?coords='+[coords.longitude,coords.latitude].join(',') )
					.success(function(data, status,headers,config) {
						$scope.appState
							.loc(data.geoid)
							.cityName = data.name;
						dataFetcher.fetchData();
					})
					.error(function(data, status,headers,config) {
						dataFetcher.fetchData();
					});
			}, function() {
				dataFetcher.fetchData();
			});
		}]);