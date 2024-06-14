let hrs=0;
let mins=0;
let sec=0;
let ms=0;

let paused = false;


function start(){
    if(!paused){
        paused = setInterval(stopwatch,10);
    }
}

function stopwatch(){
    let time = document.getElementById("timer");
    time.innerHTML = (hrs<10 ? "0" + hrs : hrs) + ":" + (mins<10 ? "0" + mins : mins) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10?"0" + ms:ms);
    ms++;
    if(ms==100){
        ms=0;
        sec++;
    }
    if(sec==60){
        sec=0;
        mins++;
    }
    if(mins==60){
        mins=0;
        hrs++;
    }

}

function stop(){
    clearInterval(paused);
    paused=false;
}

function reset(){
    hrs=0
    mins=0
    sec=0
    ms=0;
    let time = document.getElementById("timer");
    time.innerHTML = (hrs<10 ? "0" + hrs : hrs) + ":" + (mins<10 ? "0" + mins : mins) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10?"0" + ms:ms);
    stop();
    resetLaps();
}

function lap(){
    let lapElement = document.createElement("li");
    lapElement.setAttribute("class", "lap");
    lapElement.innerHTML=(hrs<10 ? "0" + hrs : hrs) + ":" + (mins<10 ? "0" + mins : mins) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10?"0" + ms:ms);
    let list = document.getElementById("laplist");
    list.appendChild(lapElement);
}
function resetLaps(){
    let list = document.getElementById("laplist");
    let elements = list.getElementsByTagName("li");
    while(elements.length>0){
        list.removeChild(elements[0]);
    }
}