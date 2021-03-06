// TIME
// 1. Need a function which sets current Date
function setDate() {
  // get date (unix time)
  const now = new Date();
  //now retrieve seconds for my seconds handler
  const seconds = now.getSeconds();
  // translate seconds into degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //-------------------- retrieve minutes now
  const minutes = now.getMinutes();
  minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //--------------------- retrieve Hours now
  const hours = now.getHours();
  hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// 3. Develop a controller that updates hour/min and seconds hands on UI
// 3.1 seconds handler
const secondHand = document.querySelector('.seconds');
// 3.2 minutes handler
const minuteHand = document.querySelector('.mins');
// 3.3 hours handler
const hourHand = document.querySelector('.hours');

//2
//INIT
(function init(){
  //Routines
  setInterval(setDate, 1000);
})();