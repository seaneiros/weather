function ForecastPartition() {

	ForecastUnit.call(this);

	this.type = '';
	this.temp = {
		avg : 0,
		min : 0,
		max : 0
	};

	this.load = function(data) {
		var colorSelector = new ColorSelector();
		this.humidity = data.humidity;
		this.pressure = data.pressure;
		this.type = data.type;
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
		this.temp = {
			avg : data.temp,
			min : ("temp_min" in data) ? data.temp_min : data.temp,
			max : ("temp_max" in data) ? data.temp_max : data.temp
		};
		this.style = [
			'background-color:',colorSelector.tempToColor(this.temp.avg),';'
		].join('');
		return this;
	}
}

ForecastPartition.prototype = Object.create(ForecastUnit.prototype);
ForecastPartition.prototype.constructor = ForecastPartition;