angular.module('weather')
	.controller('VisualForecastCtrl',['$scope', function($scope, $routeParams) {
		var utils = new Utils();
		var colorSelector = new ColorSelector();
		var temps = [];
		const MIN_COLUMN_HEIGHT = 14;
		const DEFAULT_COLUMN_MAX = 20;
		$scope.appState.changeTab('visual');
		$scope.gistData = $scope.appState.Forecast.days.slice(0,8);
		utils.forEach($scope.gistData, function(key, element) {
			temps.push(element.parts.day_short.temp.avg);
		});
		var minTemp = Math.min.apply(Math, temps);
		var maxTemp = Math.max.apply(Math, temps);
		var tempStep = Math.floor(DEFAULT_COLUMN_MAX / (maxTemp - minTemp));
		utils.forEach($scope.gistData, function(key, element) {
			var temperature = element.parts.day_short.temp.avg;
			element.height = (MIN_COLUMN_HEIGHT + (temperature - minTemp) * tempStep) + 'vw';
			element.delimiterColor = colorSelector.darken(colorSelector.tempToColor(temperature), 25);
		});
	}]);