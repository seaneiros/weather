angular.module('weather')
	.controller('BriefForecastCtrl',['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.appState.changeTab('brief');
			if ($scope.appState.expired()) {
				//TODO: почему-то не работает ng-show с $scope.appState.expired(), поэтому....грязный хак
				var overlay = document.getElementById("overlay");
				overlay.style.display = 'block';
				$http.get('http://ekb.shri14.ru/api/localities/' + $scope.appState.loc())
					.success(function(data, status, headers, config) {
						$scope.appState.reload(data);
						overlay.style.display = 'none';
					})
					.error(function(data, status, headers, config) {
						overlay.style.display = 'none';
					});
			}
	}]);