angular.module('weather')
	.controller('BriefForecastCtrl',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		if ($scope.appState.expired()) {
			$http.get('http://ekb.shri14.ru/api/localities/' + $scope.appState.loc())
				.success(function(data, status,headers,config) {
					console.log(data);
					console.log($scope.appState.reload(data));
				})
				.error(function(data, status,headers,config) {

				});
		}
	}]);