setInterval(displayClock,500);

function displayClock() {
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let timePeriod = "AM";
  
  if ( hr > 12) {
    timePeriod = "PM";
  }

  if ( hr > 12) {
    hr = hr-12;
  }

  if ( hr == 0) {
    hr = 12;
  }

  if ( hr < 10) {
    hr = '0' + hr;
  }

  if ( min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  document.querySelector("#clock").innerHTML = hr + ":" + min  + ":" + sec + ' ' + timePeriod; 
};
