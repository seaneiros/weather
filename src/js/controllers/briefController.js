angular.module('weather')
	.controller('BriefForecastCtrl',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		$http.get('http://ekb.shri14.ru/api/localities/' + $scope.appState.loc())
			.success(function(data, status,headers,config) {
				console.log(data);
			})
			.error(function(data, status,headers,config) {

			});
	}]);