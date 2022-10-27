let minutes = document.getElementById('currentMinutes')
let seconds = document.getElementById('currentSeconds')
let milliSeconds = document.getElementById('currentMilliSeconds')
let startBtn = document.getElementById('startAndStop')
let resetBtn = document.getElementById('reset')


let secondsInterval, milliSecondsInterval
let currentSeconds = 0
let currentMinutes = 0
let currentMilliSeconds = 0


// Start
function stopWatch(){
  currentSeconds++

  currentSeconds > 59 ? (currentSeconds = 0, seconds.innerText = '00', currentMinutes++)
  : currentSeconds < 10 ? seconds.innerText = '0' + currentSeconds 
  : seconds.innerText = currentSeconds

  currentMinutes < 10 ? minutes.innerText = '0' + currentMinutes
  : minutes.innerText = currentMinutes

}

function countMilliSeconds(){
   currentMilliSeconds++
   currentMilliSeconds > 99 ? (currentMilliSeconds = 0, milliSeconds.innerText = '0' + currentMilliSeconds)
   : currentMilliSeconds < 10 ? milliSeconds.innerText = '0' + currentMilliSeconds
  : milliSeconds.innerText = currentMilliSeconds
}

// Reset
function resetStopWatch(){
    if(resetBtn.style.cursor === 'pointer'){
       currentSeconds = 0
       currentMinutes = 0
       currentMilliSeconds = 0

       milliSeconds.innerText = '00'
       seconds.innerText = '00'
       minutes.innerText = '00'
    }
}

// Event handlers
startBtn.addEventListener('click', () => {
    if(startBtn.classList.contains('start')){
        startBtn.classList.replace('start', 'stop')
        startBtn.innerText = 'Stop'
        resetBtn.style.opacity = '.3'
        resetBtn.style.cursor = 'default'
        
        // Start stopwatch
        milliSecondsInterval = setInterval(countMilliSeconds, 10)
        secondsInterval = setInterval(stopWatch, 1000)


    } else if(startBtn.classList.contains('stop')){
        startBtn.classList.replace('stop', 'start')
        startBtn.innerText = 'Start'  
        resetBtn.style.opacity = '1'
        resetBtn.style.cursor = 'pointer'

        // Stop stopwatch
        clearInterval(milliSecondsInterval)
        clearInterval(secondsInterval)
    }
}, false)


resetBtn.addEventListener('click', resetStopWatch, false)