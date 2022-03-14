const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2023';

function countDown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    dayEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
//initial call
countDown()

setInterval(countDown,1000);

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}

//Check if I grab the element from Html
console.log(dayEl);
console.log(hoursEl);
console.log(minsEl);
console.log(secondsEl);
console.log(dayEl);

//Actual value

console.log(day);
console.log(hours);
console.log(mins);
console.log(seconds);
console.log(day);