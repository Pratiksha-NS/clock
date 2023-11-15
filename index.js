const deg = 6;

const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(()=>{
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let hrs = day.getHours() * 30;
    let mins = day.getMinutes() * deg;
    let  secs = day.getSeconds() * deg + ms/1000;

    hr.style.transform = `rotate(${(hrs)+ (mins/12)}deg) `;
    min.style.transform = `rotate(${mins}deg)`;
    sec.style.transform = `rotate(${secs}deg)`;

}, );