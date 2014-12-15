function ApplicationState() {
	var location = 213,
			relocated = true,
			firstLoad = true,
			lastUpdate = new Date(),
			activeTab,
			self = this;

	function refreshGist() {
		var utils = new Utils();
		var colorSelector = new ColorSelector();
		var temps = [];
		const MIN_COLUMN_HEIGHT = 14;
		const DEFAULT_COLUMN_MAX = 20;

		self.gist = self.Forecast.days.slice(0,8);
		utils.forEach(self.gist, function(key, element) {
			temps.push(element.parts.day_short.temp.avg);
		});
		var minTemp = Math.min.apply(Math, temps);
		var maxTemp = Math.max.apply(Math, temps);
		var tempStep = Math.floor(DEFAULT_COLUMN_MAX / (maxTemp - minTemp));
		utils.forEach(self.gist, function(key, element) {
			var temperature = element.parts.day_short.temp.avg;
			element.height = (MIN_COLUMN_HEIGHT + (temperature - minTemp) * tempStep) + 'vw';
			element.delimiterColor = colorSelector.darken(colorSelector.tempToColor(temperature), 25);
		});
	}

	this.cityName = 'Москва';

	this.changeTab = function(value) {
		activeTab = value;
	}

	this.checkActiveTab = function(value) {
		return activeTab == value;
	}

	this.expired = function() {
		var now = new Date();
		return relocated || ((now - lastUpdate) / 1000 / 60 >= 15);
	};

	this.loc = function(value) {
		if (value === null || value === undefined) return location;
		var valAsInt = parseInt(value);
		valAsInt = isNaN(valAsInt) ? location : valAsInt;
		relocated = firstLoad || valAsInt !== location;
		firstLoad = false;
		location = valAsInt;
		return this;
	};

	this.Now = this.Now || new ForecastUnit();
	this.Forecast = this.Forecast || new Forecast();
	this.gist = this.gist || [];

	this.reload = function(data) {
		if (!this.expired()) return this;
		this.Now.load(data.fact);
		this.Forecast.load(data.forecast);
		refreshGist();
		lastUpdate = new Date();
		relocated = false;
		return this;
	}

}