const hourHand = document.querySelector('.hand.hours');
const minuteHand = document.querySelector('.hand.minutes');
const secondHand = document.querySelector('.hand.seconds');

function setRotation (element, rotation){
    element.style.setProperty('--rotation', rotation);
}

setInterval(()=>{
    const date = new Date();
    const hourRotation = date.getHours()/12*360;
    const minutesRotation = date.getMinutes()/60*360;
    const secondsRotation = date.getSeconds()/60*360;
    setRotation(secondHand, secondsRotation);
    setRotation(minuteHand, minutesRotation);
    setRotation(hourHand, hourRotation);
}, 1000);