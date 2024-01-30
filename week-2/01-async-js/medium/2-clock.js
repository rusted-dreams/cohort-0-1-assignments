let date = new Date;

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function formatTime(hr, min, sec) {
    if (hr>12) {
        console.log(`${hr}:${min}:${sec}`);
        console.log(`${hr-12}:${min}:${sec} PM`);
    }
    else {
        console.log(`${hr}:${min}:${sec}`);
        console.log(`${hr}:${min}:${sec} AM`);   
    }
}

setInterval(() => {
    date = new Date;
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    formatTime(hr, min, sec);
}, 1000);