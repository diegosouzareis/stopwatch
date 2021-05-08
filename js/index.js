const timer = document.querySelector(".timer");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stopb = document.querySelector(".stop");

timer.innerHTML = '00:00:00';

pause.disabled = true;
stopb.disabled = true;

let segundos = 0;
let interval;

function convertToTime(segundos){
    const hours = Math.floor(segundos / 60 / 60);
    const minutes = Math.floor(segundos / 60) - (hours * 60);
    const seconds = segundos % 60;

    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function startTimer(){
    play.disabled = true;
    pause.disabled = false;
    stopb.disabled = false;
    interval = setInterval(function() {
        segundos++
        timer.innerHTML = convertToTime(segundos);
        document.title = convertToTime(segundos);
    }, 1000);
}

function pauseTimer() {
    pause.disabled = true
    play.disabled = false
    return clearInterval(interval);
}

function stopTimer() {
    play.disabled = false;
    pause.disabled = true
    stopb.disabled = true
    segundos = 0;
    clearInterval(interval);
    timer.innerHTML = convertToTime(segundos);
    document.title = 'Stopwatch';
}

play.addEventListener('click', function(e) {
    startTimer();
});

pause.addEventListener('click', function(e) {
    pauseTimer();
});

stopb.addEventListener('click', function(e) {
    stopTimer();
});