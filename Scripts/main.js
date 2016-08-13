function update() {
    
    var day = function (i) {
        if (i == 1) {
            return i + " DAY LEFT";
        } else if (i == 0) {
            return " DUE TODAY";
        } else if (i < 0) {
            return "Closed";
        } else {
            return i + " Days Left";
        }
    
    }
    
    var redTgt = function () {
        var a = Date.parse("10/27/2016 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24));
        return b;
    }();
    
    var yelTgt = function () {
        var a = Date.parse("11/17/2016 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24));
        return b;
    }();
    
    var greTgt = function () {
        var a = Date.parse("12/08/2016 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24)); 
        return b;
    }();
    
    var bluTgt = function () {
        var a = Date.parse("01/12/2017 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24));
        return b;
    }();
    
    var purTgt = function () {
        var a = Date.parse("02/09/2017 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24));
        return b;
    }();
    
    var pinTgt = function () {
        var a = Date.parse("03/09/2017 00:00:00") - Date.parse(new Date());
        var b = Math.floor(a/(1000*60*60*24));
        return b;
    }();
    
    document.getElementById("r").innerHTML = day(redTgt);
    document.getElementById("y").innerHTML = day(yelTgt);
    document.getElementById("g").innerHTML = day(greTgt);
    document.getElementById("b").innerHTML = day(bluTgt);
    document.getElementById("pu").innerHTML = day(purTgt);
    document.getElementById("pi").innerHTML = day(pinTgt);
    setTimeout(call,1000);
}

update();