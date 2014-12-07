angular.module('weather')
	.directive('navTabs', function() {
		return {
			link : function(scope, element, attrs) {

			},
			templateUrl : './templates/navTabs.html',
			replace : false,
			restrict : 'AC'
		};
	});