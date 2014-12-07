angular.module('weather').
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
		}]);