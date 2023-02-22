const hourHand = document.querySelector('.hand.hours');
const minuteHand = document.querySelector('.hand.minutes');
const secondHand = document.querySelector('.hand.seconds');

function setRotation (element, percentage){
    element.style.setProperty('--rotation', percentage*360);
}

setInterval(()=>{
    const date = new Date();
    const secondsPercentage = date.getSeconds()/60;
    const minutesPercentage = (secondsPercentage + date.getMinutes())/60;
    const hourPercentage = (minutesPercentage + date.getHours())/12;

    setRotation(secondHand, secondsPercentage);
    setRotation(minuteHand, minutesPercentage);
    setRotation(hourHand, hourPercentage);
}, 1000);