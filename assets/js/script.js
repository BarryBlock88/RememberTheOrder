let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let style = true;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#score');
const bread= document.querySelector('#bread');
const cinRoll = document.querySelector('#cinnimon-roll');
const painAu = document.querySelector('#pain-au-chocolat');
const faCake = document.querySelector('#fairy-cake');


const onButton = document.getElementById('#onBtn');
const startBtn = document.getElementById('#startbtn');
const strictBtn = document.getElementById('#DOption3');


strictBtn.addEventListener('change', (event) => {
console.log('checked')
if(strictBtn.checked == true){
    strict == true;
} else {
    strict == false;
}
});

onButton.addEventListener('click', buttonOn());

function buttonOn() {
    if(onButton.click == true){
    on == true;
    turnCounter.innerHTML = '0';
} else {
    on == false;
    turnCounter.innerHTML = '';
    clearColor();
    clearInterval(intervalid);
}
};
startBtn.addEventListener('click', (event) => {
if(on == true){
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
                if(order[flash] = 2) two();
                if(order[flash] = 3) three();
                if(order[flash] = 4) four();
                flash++;
            }, 200)

        };
    };

    function one() {
   if (style) {
    style = true;
  faCake.style.backgroundColor = "rgb(105, 237, 100)";
}}

function two() {
  if (style) {
    style = true;
 painAu.style.backgroundColor = "rgb(221, 185, 64)";
  }
}

function three() {
  if (style) {
    style = true;
   bread.style.backgroundColor = "rgb(241, 16, 9)";
  }
}

function four() {
   if (style) {
    style = true;
    cinRoll.style.backgroundColor = "cornflowerblue";
}}


function clearColor() {
  cinRoll.style.backgroundColor = "transparent";
  bread.style.backgroundColor = "transparent";
  painAu.style.backgroundColor = "transparent";
  faCake.style.backgroundColor = "transparent";
}