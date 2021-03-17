let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#score');
const bread= document.querySelector('#bread');
const cinRoll = document.querySelector('#cinnimon-roll');
const painAu = document.querySelector('#pain-au-chocolat');
const faCake = document.querySelector('#fairy-cake');


const onButton = document.querySelector('#onBtn');
const startBtn = document.querySelectorAll('.startbtn');
const strictBtn = document.querySelector('#DOption3');


strictBtn.addEventListener('change', (event) => {
console.log('checked')
if(strictBtn.checked == true){
    strict == true;
} else {
    strict == false;
}
});

onButton.addEventListener('checked', (event) => {
    if(onButton.checked == true){
    on == true;
    turnCounter.innerHTML = '0';
} else {
    on == false;
    turnCounter.innerHTML = '';
    clearColor();
    clearInterval(intervalid);
}
});
startBtn.addEventListener('click', (event) => {
if(on || startBtn.clicked == true){
    play();
}
    });


    function play(){
        win = false;
        order = [];
        playerOrder = [];
        flash = 0;
        turn = 1;
        intervalId = 0;
        turnCounter.innerHTML = '1';
        good = true;
        for (let i = 0; i < 20; i++){
            order.push(Math.floor(Math.random() * 4) + 1);
        }
        compTurn = true;

        intervalId = setInterval(gameTurn, 800)
    }

    function gameTurn() {
        on = false;

        if(flash == turn) {
            clearInterval(intervalId);
            compTurn = false;
            clearColor();
            on = true;
        }

        if(compTurn){
            clearColor();
            setTimeout(() => {
                if(order[flash] = 1) one();
            }, 200)
        };
    };