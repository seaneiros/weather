function ApplicationState() {
	var location = 213,
			relocated = false,
			lastUpdate = new Date();

	this.expired = function() {
		var now = new Date();
		return relocated || ((now - lastUpdate) / 1000 / 60 >= 15);
	}

	this.loc = function(value) {
		if (value === null || value === undefined) return location;
		var valAsInt = parseInt(value);
		valAsInt = isNaN(valAsInt) ? location : valAsInt;
		relocated = valAsInt !== location;
		location = valAsInt;
		return this;
	}

}
