angular.module('weather')
	.provider('dataFetcher', function() {

		var _applicationState,
				_http;

		this.fetchData = function() {
			if (_applicationState.expired()) {
				//TODO: почему-то не работает ng-show с $scope.appState.expired(), поэтому....грязный хак
				var overlay = document.getElementById("overlay");
				overlay.style.display = 'block';
				_http.get('http://ekb.shri14.ru/api/localities/' + _applicationState.loc())
					.success(function(data, status, headers, config) {
						_applicationState.reload(data);
						overlay.style.display = 'none';
					})
					.error(function(data, status, headers, config) {
						overlay.style.display = 'none';
					});
			}
		};

		this.$get = ['applicationState', '$http', function(applicationState, $http) {
			_applicationState = applicationState;
			_http = $http;
			return this;
		}];

	});