function ApplicationState() {
	var location = 213,
			relocated = false,
			lastUpdate = new Date(),
			activeTab;

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
		relocated = valAsInt !== location;
		location = valAsInt;
		return this;
	};

	this.Now = new ForecastUnit();
	this.Forecast = new Forecast();

	this.reload = function(data) {
		if (!this.expired()) return this;
		this.Now.load(data.fact);
		this.Forecast.load(data.forecast);
		lastUpdate = new Date();
		relocated = false;
		return this;
	}

}