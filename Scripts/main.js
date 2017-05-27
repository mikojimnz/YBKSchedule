function update() {
	var calTime = function(time) {
		var rem = Date.parse(time) - Date.parse(new Date());
		var sec = Math.floor((rem / 1000) % 60); // sec
		var min = Math.floor((rem / 1000 / 60) % 60); // min
		var hour = Math.floor((rem / (1000 * 60 * 60)) % 24); // hour
		var day = Math.floor(rem / (1000 * 60 * 60 * 24)); // day

		var count = "";

		if (day == 1) {
			count += day + " Day, ";
		} else if (day <= 0) {
			count += "";
		} else {
			count += day + " Days, ";
		}

		if (hour == 1) {
			count += hour + " Hour, ";
		} else if (hour <= 0) {
			count += "";
		} else {
			count += hour + " Hours, ";
		}

		if (min == 1) {
			count += min + " Minute, ";
		} else if (min <= 0) {
			count += "";
		} else {
			count += min + " Minutes, ";
		}

		if (sec == 1) {
			count += sec + " Second";
		} else if (sec <= 0) {
			count += "0 Seconds";
		} else {
			count += sec + " Seconds";
		}

		count += " Left";

		if (count == "0 Seconds Left") {
			return "Completed";
		}

		return count;
	}

	document.getElementById("r").innerHTML = calTime("10/25/2016 13:00:00");
	document.getElementById("y").innerHTML = calTime("11/16/2016 12:00:00");
	document.getElementById("g").innerHTML = calTime("12/06/2016 12:00:00");
	document.getElementById("b").innerHTML = calTime("01/11/2017 12:00:00");
	document.getElementById("pu").innerHTML = calTime("02/07/2017 12:00:00");
	document.getElementById("pi").innerHTML = calTime("03/07/2017 12:00:00");
	setTimeout(update, 1000);
}

update();