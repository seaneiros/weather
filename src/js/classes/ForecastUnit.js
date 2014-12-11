function ForecastUnit() {

	this.humidity = 0;
	this.pressure = 0;
	this.temp = 0;
	this.weather = {
		description : '',
		code : '',
		icon : ''
	};
	this.wind = {
		description : '',
		abbr : '',
		direction : '',
		speed : 0
	};

	this.load = function(data) {
		var colorSelector = new ColorSelector();
		this.humidity = data.humidity;
		this.pressure = data.pressure;
		this.temp = data.temp;
		this.style = [
			'background-color:',colorSelector.tempToColor(this.temp),';'
		].join('');
		this.weather = {
			description : data.weather,
			code : data.weather_code,
			icon : data.weather_icon
		};
		this.wind = {
			description : data.wind,
			abbr : data.wind_abbr,
			direction : data.wind_direction,
			speed : data.wind_speed
		};
		return this;
	}

}