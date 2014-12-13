angular.module('weather')
	.controller('AppController',['$scope', '$http', '$routeParams', 'applicationState', '$location',
		function($scope, $http, $routeParams, applicationState, $location) {
			var coords;
			$scope.appState = applicationState;
			navigator.geolocation.getCurrentPosition(function(result) {
				coords = result.coords;
				$http.get('http://ekb.shri14.ru/api/geocode?coords='+[coords.longitude,coords.latitude].join(',') )
					.success(function(data, status,headers,config) {
						$location.path(['/loc/',data.geoid].join(''));
					})
					.error(function(data, status,headers,config) {
					});
			}, function() {
				$location.path(['/loc/', $scope.appState.loc()].join(''));
			});
		}]);