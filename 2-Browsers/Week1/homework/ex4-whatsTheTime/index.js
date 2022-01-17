'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const body = document.querySelector('body');
  const clock = document.createElement('div');
  body.appendChild(clock);

  function getCurrentTime() {
    const clockFormatter = (time) => (time < 10 ? `0${time}` : `${time}`);

    const currentTime = new Date();
    const displayedTime = `${clockFormatter(
      currentTime.getHours()
    )} : ${clockFormatter(currentTime.getMinutes())} : ${clockFormatter(
      currentTime.getSeconds()
    )}`;

    clock.textContent = displayedTime;
    console.log(displayedTime);
  }

  setInterval(getCurrentTime, 1000);
}

window.addEventListener('load', addCurrentTime);
