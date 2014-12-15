angular.module('weather')
	.provider('dataFetcher', function() {

		var _applicationState,
				_http;

		this.fetchData = function() {
			if (_applicationState.expired()) {
				//TODO: почему-то не работает ng-show с $scope.appState.expired(), поэтому....грязный хак
				var overlay = document.getElementById("overlay");
				overlay.style.display = 'block';
				var promise = _http.get('http://ekb.shri14.ru/api/localities/' + _applicationState.loc())
					.then(function(response) {
						_applicationState.reload(response.data);
						overlay.style.display = 'none';
					}, function() {
						overlay.style.display = 'none';
					});
				return promise;
			} else {
				return _http.get('');
			}
		};

		this.$get = ['applicationState', '$http', function(applicationState, $http) {
			_applicationState = applicationState;
			_http = $http;
			return this;
		}];

	});