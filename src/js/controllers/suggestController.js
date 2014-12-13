angular.module('weather')
	.controller('SuggestController',['$scope', '$http', '$location', '$timeout',
		function($scope, $http, $location, $timeout) {
			var utils = new Utils();

			$scope.list = [];
			$scope.city = '';

			$scope.makeSuggest = function(text) {
				$http.get('http://ekb.shri14.ru/api/suggest?query=' + text)
					.success(function(data, status,headers,config) {
						$scope.list = data;
					})
					.error(function(data, status,headers,config) {
					});
			}

			$scope.findLocation = function(text) {
				utils.forEach($scope.list, function(key, element) {
					if (text.toLowerCase() === element.name.toLowerCase()) {
						$location.path(['/loc/',element.geoid].join(''));
					}
				});
			}

		}]);
