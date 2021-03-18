const HOURHAND = document.querySelector(".hours-hand");
const MINUTEHAND = document.querySelector(".minutes-hand");
const SECONDHAND = document.querySelector(".seconds-hand");



function runTheClock() {

  var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
var minPosition = (min * (360 / 60)) + (sec *((360 / 60) / 60));
var secPosition = sec * 360 / 60;



  HOURHAND.style.transform =
    "rotate(" + hrPosition + "deg) translate(-50%, -100%)";
  MINUTEHAND.style.transform =
    "rotate(" + minPosition + "deg) translate(-50%, -100%)";
  SECONDHAND.style.transform =
    "rotate(" + secPosition + "deg) translate(-50%, -90%)";
}

var interval = setInterval(runTheClock, 1000);
