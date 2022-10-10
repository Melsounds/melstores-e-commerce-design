const daysDisplay = document.getElementById("days");
const hrsDisplay = document.getElementById("hrs");
const minsDisplay = document.getElementById("mins");
const secsDisplay = document.getElementById("secs");


const newYear = '1 Jan 2023';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecs = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600/ 24);
    const hrs = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60

    daysDisplay.innerHTML = days;
    hrsDisplay.innerHTML = timeFormat(hrs);
    minsDisplay.innerHTML = timeFormat(mins);
    secsDisplay.innerHTML = timeFormat(secs);
}
function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}

countdown();


setInterval(countdown, 1000);