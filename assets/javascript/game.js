let teamoneButton = document.querySelector('#teamone-shoot-button');
let teamtwoButton = document.querySelector('#teamtwo-shoot-button');
let counterOne = document.querySelector('#teamone-numgoals');
let counterTwo = document.querySelector('#teamtwo-numgoals');
let shotOne = document.querySelector('#teamone-numshots');
let shotTwo = document.querySelector('#teamtwo-numshots');
let resetButton = document.querySelector('#reset-button');
let resetCount = document.querySelector('#num-resets');


resetButton.addEventListener("click", function () {
    console.log("Scores Reset, try again!");
    shotOne.innerHTML = 0;
    counterOne.innerHTML = 0;
    shotTwo.innerHTML = 0;
    counterTwo.innerHTML = 0;
    let newCounterValue = Number(resetCount.innerHTML) + 1;
    resetCount.innerHTML = newCounterValue;
    }
)
teamoneButton.addEventListener("click", function() {
    
let newCounterValue = Number(shotOne.innerHTML) + 1;
shotOne.innerHTML = newCounterValue;
    Math.random () * 11 ;
    if(Math.random () * 11 < 6) {
    let newCounterValue = Number(counterOne.innerHTML) + 1;
    counterOne.innerHTML = newCounterValue;
    console.log("Team one Scored!");
}
    if(counterOne === 10) {
        console.log("Team One wins!");
        alert("Team One wins!");
    }
})

teamtwoButton.addEventListener("click", function() {
    
let newCounterValue = Number(shotTwo.innerHTML) + 1;
shotTwo.innerHTML = newCounterValue;
    Math.random () * 11 ;
    if(Math.random () * 11 > 6) {
    let newCounterValue = Number(counterTwo.innerHTML) + 1;
counterTwo.innerHTML = newCounterValue;
console.log("Team two Scored!");
    }
    if(counterTwo === 10) {
        console.log("Team Two Wins!");
        alert("Team Two Wins!");
    }
})