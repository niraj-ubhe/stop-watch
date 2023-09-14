console.log("hi")
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn")
let resetBtn = document.getElementById("resetBtn");
let time = document.getElementById("time");
let flagBtn = document.getElementById("flagBtn");
let flagList = document.getElementById("flag-list");

let min = 0,  
    sec = 0, 
    msec = 0; 

let printFormattedTime = ()=> { 
    time.innerHTML =`${formatNum(min)} : ${formatNum(sec)} : ${formatNum(msec)}` ;
};

function formatNum(num){
    return num < 10 ? "0" + num.toString() : num.toString();
}

let timerInterval;

function start () { 
 
        clearInterval (timerInterval)

        startBtn.classList.add("btn-hidden");       //hide start btn
        stopBtn.classList.remove("btn-hidden");     //add stop btn

        timerInterval = setInterval(() => {
             ++msec;
         if ( msec > 99){
            (msec = 0),
            ++sec;
         }
         if ( sec > 59){
            (msec = 0),
            (sec = 0),
            ++min;
         }
            printFormattedTime();
        }, 10);
        
    }
    
 function stop(){
    clearInterval(timerInterval)
    startBtn.classList.remove("btn-hidden");       //show start btn
    stopBtn.classList.add("btn-hidden");     //hide stop btn
 }

    

 function reset() {
    clearInterval (timerInterval)
    min = 0,  
    sec = 0, 
    msec = 0; 
    printFormattedTime();
    startBtn.classList.remove("btn-hidden");       //show start btn
    stopBtn.classList.add("btn-hidden");            //hide stop btn
   flagList.innerText = "";
 }
 
function flags(){
    if (min === 0 && sec === 0 && msec === 0) return;
    let flagCapture = `${formatNum(min)} : ${formatNum(sec)} : ${formatNum(msec)}` ;
    let flagEle = document.createElement("li");
    flagEle.innerText = flagCapture;
    flagList.appendChild(flagEle);
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset);
flagBtn.addEventListener("click", flags)