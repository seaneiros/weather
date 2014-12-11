function Forecast() {

	function sortDates(a, b) {
		return a.date - b.date;
	}

	this.days = [];

	this.load = function(data) {

		var todayDate = new Date(),
				tomorrowDate = new Date(),
				iDate, dayName, isToday, isWeekend,
				self = this;
		var utils = new Utils();

		tomorrowDate.setDate(new Date().getDate() + 1);
		tomorrowDate.setHours(0);
		tomorrowDate.setMinutes(0);
		tomorrowDate.setSeconds(0);

		for (var i = data.length;i--;) {
			iDate = new Date(data[i].date);
			iDate.setHours(0);
			iDate.setMinutes(0);
			iDate.setSeconds(0);

			var tempParts = {};

			utils.forEach(data[i].parts, function(key, part) {
				tempParts[part.type] = new ForecastPartition().load(part);
			});

			isToday = false;
			isWeekend = [0,6].indexOf(iDate.getDay()) >= 0;

			switch (iDate.getDate()) {
				case todayDate.getDate(): dayName = 'Сегодня'; isToday = true; break;
				case tomorrowDate.getDate(): dayName = 'Завтра'; break;
				default: dayName = datef('DD', iDate);
			}

			this.days.push({
				label : [dayName,', ',datef('d MMMM', iDate)].join(''),
				date : iDate,
				parts : tempParts,
				isToday : isToday,
				isWeekend : isWeekend
			});
		}

		this.days.sort(sortDates);
		return this;
	}

}