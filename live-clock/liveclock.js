function generatetime() {
    var clockInterval;
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    var day = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour >= 12) {
        day = "PM";

        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hour + ":" + minute + ":" + seconds + " " + day;

    document.getElementById("output").innerHTML = time;
}
var clockInterval;

function startClock() {
    generatetime();
    clockInterval = setInterval(generatetime, 1000);
}