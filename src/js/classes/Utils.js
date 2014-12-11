function Utils() {

	this.clone = function(obj) {
		var k = {};
		for(var x in obj) {
			if(obj[x] !== null && typeof(obj[x])=="object") {
				k[x] = this.clone(obj[x]);
			} else {
				k[x] = obj[x];
			}
		}

		return k;
	};

	this.forEach = function (data, callback) {
		for(var key in data){
			if(data.hasOwnProperty(key)){
				callback(key, data[key]);
			}
		}
	};

}
