angular.module('weather')
	.controller('SuggestController',['$scope', '$http', '$location', 'dataFetcher', '$rootScope',
		function($scope, $http, $location, dataFetcher, $rootScope) {
			var utils = new Utils();

			$scope.list = [];
			$scope.city = '';

			$scope.makeSuggest = function(text) {
				var clone;
				$scope.list = [];
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
					if (text === element.searchName) {
						$scope.appState
							.loc(element.geoid)
							.cityName = element.name;
					}
				});
				dataFetcher.fetchData();
			}

		}]);
