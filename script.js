const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('second');
const millisecondsLabel = document.getElementById('millisecond');

const startButton = document.getElementById('startbtn');
const stopButton = document.getElementById('stopbtn');
const resetButton = document.getElementById('resetbtn');
const pauseButton = document.getElementById('pausebtn');

const laplist= document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
pauseButton.addEventListener('click', pauseTimer);

function startTimer(){
    
  interval=setInterval(updateTimer,10);
    startButton.disabled = true;

}
function stopTimer(){
    clearInterval(interval);
    startButton.disabled = false;
    addTolaplist();

}
function resetTimer(){
  clearInterval(interval);
    resetTimerData();
   
    resetButton.disabled = true;
    startButton.disabled = false;
}
function pauseTimer(){
    clearInterval(interval);
    startButton.disabled = false;
 

}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
         if (seconds === 60){
        seconds =0;
        minutes++;
    }
    }
   displayTimer();

}
function displayTimer(){
    millisecondsLabel.textContent= padTime( milliseconds);
    secondsLabel.textContent= padTime(seconds);
    minutesLabel.textContent= padTime(minutes);
}
function padTime(time){
    return time.toString().padStart(2,'0');
}
function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}
function addTolaplist() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${laplist.childElementCount + 1}: ${lapTime}</span>`;
    laplist.appendChild(listItem);
}
