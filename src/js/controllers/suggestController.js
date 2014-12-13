angular.module('weather')
	.controller('SuggestController',['$scope', '$http', '$location', '$timeout',
		function($scope, $http, $location, $timeout) {
			var utils = new Utils();

			$scope.list = [];
			$scope.city = '';

			$scope.makeSuggest = function(text) {
				var clone;
				$http.get('http://ekb.shri14.ru/api/suggest?query=' + text)
					.success(function(data, status,headers,config) {
						utils.forEach(data, function(key, element) {
							clone = utils.clone(element);
							clone.searchName = clone.name.toLowerCase();
							element.searchName = element.name;
							$scope.list.push(clone);
							$scope.list.push(element);
						});
					})
					.error(function(data, status,headers,config) {
					});
			}

			$scope.findLocation = function(text) {
				utils.forEach($scope.list, function(key, element) {
					if (text.toLowerCase() === element.name.toLowerCase()) {
						$scope.appState.cityName = element.name;
						$location.path(['/loc/', element.geoid].join(''));
					}
				});
			}

		}]);
