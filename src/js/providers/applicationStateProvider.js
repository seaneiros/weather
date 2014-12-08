angular.module('weather')
	.provider('applicationState', function() {
		var state = new ApplicationState();
		this.$get = function() {
			return state;
		}
	});