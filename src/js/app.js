angular.module('weather', ['ngRoute','mobile-angular-ui']).
	config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/brief', {
					templateUrl: './templates/brief.html',
					controller: 'BriefForecastCtrl'})
				.when('/detailed', {
					templateUrl: './templates/detailed.html',
					controller: 'DetailedForecastCtrl'})
				.when('/visual', {
					templateUrl: './templates/visual.html',
					controller: 'VisualForecastCtrl'})
				.otherwise({
					redirectTo: '/'
				});
		}])
	.controller('BriefForecastCtrl', function($scope, $routeParams) {
		//$scope.gid = 54;//$routeParams.gid;
	})
	.controller('DetailedForecastCtrl', function($scope, $routeParams) {
		//$scope.gid = 54;//$routeParams.gid;
	})
	.controller('VisualForecastCtrl', function($scope, $routeParams) {
		//$scope.gid = 54;//$routeParams.gid;
	});