let sequence = [];
let playerSequence = [];
let flash;
let level;
let good;
let computerSequence;
let levelInterval;
let sound = true;
let on = false;
let hard = false;
let win;


let bread = document.getElementById('bread');
let cinRoll = document.getElementById('cinnimon-roll');
let painAu = document.getElementById('pain-au-chocolat');
let faCake = document.getElementById('fairy-cake');


let startBtn = document.getElementById('startbtn');
let levelCounter = document.getElementById('score');
let onButton = document.getElementById('onBtn')
let hardMode = document.getElementById('difficulty')

function onButtonOn() {
  if (onButton.value == "OFF") {
onButton.value = "ON";
     onButton.style.color = "blue"
  } else {
    onButton.value = "OFF";
    onButton.style.color = "red"
  }
}
function hardModeBtn() {
  if (hardMode.value == "NORMAL") {
    hardMode.value = "BUSY";
     hardMode.style.color = "blue"
  } else {
    hardMode.value = "NORMAL";
    hardMode.style.color = "brown"
  }
}


hardMode.addEventListener('click', hardModeActive);
function hardModeActive() {
  if (hardMode.value == "BUSY") {
    hard = true;
  } else {
    hard = false;
  }
};


onButton.addEventListener('click', gameOn);
function gameOn() {
    console.log('GameOn')
    if (onButton.value == "ON") {
        on == true;
        levelCounter.innerHTML = "<h3>Ready...start taking orders!</h3>";
    } else {
        on == false;
        levelCounter.innerHTML = ""
        clearBackground();
        clearInterval(levelInterval);
    }
};

startBtn.addEventListener('click', play, on == true)

function play() {
    win = false;
    sequence = [];
    playerSequence = [];
    flash = 0;
    levelInterval = 0;
    level = 1;
    levelCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    computerSequence = true;

    levelInterval = setInterval(gameTurn, 800)
}

function gameTurn() {
    on = false;

    if (flash == level) {
        clearInterval(levelInterval);
        computerSequence = false;
        clearBackground();
        on = true;
    }
// Asigns the numbers 1-4 ,calls the function to flash the correct sequence of colours for the computer
    if (computerSequence) {
        clearBackground();
        setTimeout(function() {
            if (sequence[flash] == 1) { 
                one();
            }
            if (sequence[flash] == 2) {
                two();
            }
            if (sequence[flash] == 3) {
                three();
            }
            if (sequence[flash] == 4) {
                four();
            }
            flash++;
        }, 200)
    }

};

function one() {
    cinRoll.style.backgroundColor = "cornflowerblue";
};

function two() {
    bread.style.backgroundColor = "rgb(241, 16, 9)";
};


function three() {
    painAu.style.backgroundColor = "rgb(221, 185, 64)";
};


function four() {
    faCake.style.backgroundColor = "rgb(105, 237, 100)";
};


function clearBackground() {
    cinRoll.style.backgroundColor = "transparent";
    bread.style.backgroundColor = "transparent";
    painAu.style.backgroundColor = "transparent";
    faCake.style.backgroundColor = "transparent";
}

function flashColor() {
    cinRoll.style.border = "thick solid pink";
    bread.style.border = "thick solid pink";
    painAu.style.border = "thick solid pink";
    faCake.style.border = "thick solid pink";
     if (on) {
            setTimeout(function() {
                clearColor();
            }, 300);
        }

}
function clearColor() {
    cinRoll.style.border = "none";
    bread.style.border = "none";
    painAu.style.border = "none";
    faCake.style.border = "none";
}


cinRoll.addEventListener( 'click', function() {
    if (on == true) {
        playerSequence.push(1);
        checkAnswer();
        one();
        if (!win) {
            setTimeout(function() {
                clearBackground();
            }, 300);
        }
    }
});

bread.addEventListener('click', function() {
    if (on == true) {
        playerSequence.push(2);
        checkAnswer();
        two();
        if (!win) {
            setTimeout(function() {
                clearBackground();
            }, 300);
        }
    }
});

painAu.addEventListener('click', function() {
    if (on == true) {
        playerSequence.push(3);
        checkAnswer();
        three();
        if (!win) {
            setTimeout(function() {
                clearBackground();
            }, 300);
        }
    }
});

faCake.addEventListener('click', function() {
    if (on == true) {
        playerSequence.push(4);
        checkAnswer();
        four();
        if (!win) {
            setTimeout(function() {
                clearBackground();
            }, 300);
        }
    }
});

cinRoll.addEventListener('mouseenter', one);
cinRoll.addEventListener('mouseleave', clearBackground);
bread.addEventListener('mouseenter', two);
bread.addEventListener('mouseleave', clearBackground);
painAu.addEventListener('mouseenter', three);
painAu.addEventListener('mouseleave', clearBackground);
faCake.addEventListener('mouseenter', four);
faCake.addEventListener('mouseleave', clearBackground);

function checkAnswer(){
    if(playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1])
    good = false;

    else if(playerSequence.length == 20 && good) {
        winGame();
    }
    playError();
    nextLevel();
}

function playError() {
    if(good == false){
        flashColor();
        levelCounter.innerHTML ="OH NO you made a mistake!";
        setTimeout(function() {
            levelCounter.innerHTML = level;
                clearBackground();
              
                if(hard) {
                    play();
                } else {
                    computerSequence = true;
                    flash = 0;
                    playerSequence = [];
                    good = true;
                    levelInterval = setInterval(gameTurn, 800);
                }
                }, 200);
        }
    }


function nextLevel() {
    if (level == playerSequence.length && good && !win) {
        level++;
        levelCounter.innerHTML = level;
        playerSequence = [];
        computerSequence = true;
        flash = 0;
        levelInterval = setInterval(gameTurn, 800);
    }
}

function winGame() {
    flashColor();
    levelCounter.innerHTML = "You WON!"
    on = false;
    win = true;
}