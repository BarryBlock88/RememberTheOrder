
let sequence = [];
let playerOrder = [];
let flashhHoverHover;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let start = false;
let win;



let cinRoll = document.querySelector('.cinnimon-roll')
let bread = document.querySelector('.bread')
let faCake = document.querySelector('.fairy-cake')
let painAu = document.querySelector('.pain-au-chocolat')
let startBtn = document.querySelector(".startbtn");
let scoreCount = document.querySelector(".score");



function play() {
  win = false;
  sequence = [];
  sequence = [];
  flashhHover = 0;
  intervalId = 0;
  turn = 1;
  scoreCount.innerHTML = '<h3>Your Score: 100</h3>';
  good = true;
  for (var i = 0; i < 20; i++) {
    sequence.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  startBtn = false;

  if (flashhHover == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    startBtn = true;
  }

 if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (sequence[flashhHover] == 1) one();
      if (sequence[flashhHover] == 2) two();
      if (sequence[flashhHover] == 3) three();
      if (sequence[flashhHover] == 4) four();
      flashhHover++;
    }, 700);
  }
}
function one() {
  if (noise) {
  noise = true;
  faCake.style.backgroundColor = "rgb(105, 237, 100)";
}}

function two() {
  if (noise) {
    
 painAu.style.backgroundColor = "rgb(221, 185, 64)";
  }
}

function three() {
  if (noise) {
    
   bread.style.backgroundColor = "rgb(241, 16, 9)";
  }
}

function four() {
  if (noise) {
    cinRoll.style.backgroundColor = "cornflowerblue";
}}

function clearColor() {
  cinRoll.style.backgroundColor = "transparent";
  bread.style.backgroundColor = "transparent";
  painAu.style.backgroundColor = "transparent";
  faCake.style.backgroundColor = "transparent";
}

function flashColor() {
  cinRoll.style.backgroundColor = "cornflowerblue";
  bread.style.backgroundColor = "rgb(241, 16, 9)";
  painAu.style.backgroundColor = "rgb(221, 185, 64)";
  faCake.style.backgroundColor = "rgb(105, 237, 100)";
}

let diffOption1 = document.querySelector('#DOption1');
let diffOption2 = document.querySelector('#DOption2');
let diffOption3 = document.querySelector('#DOption3');
let diffOption4 = document.querySelector('#DOption4');

diffOption1.addEventListener('click' (event) === {
    if (diffOption1 = checked) {
        difficulty == 3;
   
    }
})

diffOption2.addEventListener('click' (event) === {
    if (diffOption2 = checked) {
        difficulty == 2;
   
    }
})

diffOption3.addEventListener('click' (event) === {
    if (diffOption3 = checked) {
        difficulty == 1;
   
    }
})

diffOption4.addEventListener('click' (event) === {
    if (diffOption4 = checked) {
        difficulty == 0.5;
   
    }
})





strictBtn.addEventListener('change', function()  {
console.log('checked')
if(strictBtn.checked == true){
    strict == true;
} else {
    strict == false;
}
});


    if (sound) {
    let audio = document.getElementById("sound1");
    audio.play();
  }
  sound = true;