function update() {
    var calTime = function (time) {
        var rem = (Date.parse(time) - Date.parse(new Date())) / 1000;
        var sec = Math.floor(rem % 60); // sec
        var min = Math.floor((rem / 60) % 60); // min
        var hour = Math.floor((rem / (60 * 60)) % 24); // hour
        var day = Math.floor(rem / (60 * 60 * 24)); // day
      
        if (day >= 1) {
            return day == 1 ? day + " Day Left" : day + " Days Left";
        }
        if (hour >= 1) {
            return hour == 1 ? hour + " Hour Left" : hour + " Hours Left";
        }
        if (min >= 1) {
            return min == 1 ? min + " Minute Left" : min + " Minutes Left";
        }
        if (sec >= 1) {
            return sec == 1 ? sec + " Second Left" : sec + " Seconds Left";
        }
		return "Completed";
    };

    document.getElementById("r").innerHTML = calTime("10/31/2017 13:30:00");
    document.getElementById("rp").innerHTML = calTime("10/24/2017 13:30:00");
    document.getElementById("rd").innerHTML = calTime("10/26/2017 13:30:00");
    
    document.getElementById("b").innerHTML = calTime("11/14/2017 12:30:00");
    document.getElementById("bp").innerHTML = calTime("11/07/2017 12:30:00");
    document.getElementById("bd").innerHTML = calTime("11/09/2017 12:30:00");
    
    document.getElementById("g").innerHTML = calTime("12/05/2017 12:30:00");
    document.getElementById("gp").innerHTML = calTime("11/28/2017 12:30:00");
    document.getElementById("gd").innerHTML = calTime("11/30/2017 12:30:00");
    
    document.getElementById("y").innerHTML = calTime("01/09/2018 12:30:00");
    document.getElementById("yp").innerHTML = calTime("01/03/2018 12:30:00");
    document.getElementById("yd").innerHTML = calTime("01/05/2018 12:30:00");
    
    document.getElementById("pu").innerHTML = calTime("02/06/2018 12:30:00");
    document.getElementById("pup").innerHTML = calTime("01/30/2018 12:30:00");
    document.getElementById("pud").innerHTML = calTime("02/01/2018 12:30:00");
    
    document.getElementById("pi").innerHTML = calTime("03/08/2018 12:30:00");
    document.getElementById("pip").innerHTML = calTime("02/28/2018 12:30:00");
    document.getElementById("pid").innerHTML = calTime("03/07/2018 12:30:00");
    setTimeout(update, 1000);
}

update();
