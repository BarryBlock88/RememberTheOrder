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

let audio1 = document.getElementById('btn-audio1');
let audio2 = document.getElementById('btn-audio2');
let audio3 = document.getElementById('btn-audio3');
let audio4 = document.getElementById('btn-audio4');

let bread = document.getElementById('bread');
let cinRoll = document.getElementById('cinnimon-roll');
let painAu = document.getElementById('pain-au-chocolat');
let faCake = document.getElementById('fairy-cake');


let startBtn = document.getElementById('startbtn');
let levelCounter = document.getElementById('level');
let onButton = document.getElementById('onBtn');
let hardMode = document.getElementById('difficulty');



function onButtonOn() {
    if (onButton.value == "OFF") {
        onButton.value = "ON";
        onButton.style.color = "rgb(17, 212, 226)";
        $('#onBtn').html("ON");
    } else {
        onButton.value = "OFF";
        onButton.style.color = "#CCC5B9";
        $('#onBtn').html("OFF");
    }
}
function hardModeBtn() {
    if (hardMode.value == "NORMAL") {
        hardMode.value = "HARD";
        hardMode.style.color = "rgb(17, 212, 226)";
        $('#difficulty').html("HARD");
    } else {
        hardMode.value = "NORMAL";
        hardMode.style.color = "#CCC5B9";
        $('#difficulty').html("NORMAL");
    }
}


hardMode.addEventListener('click', hardModeActive);
function hardModeActive() {
    if (hardMode.value == "HARD") {
        hard = true;
    } else {
        hard = false;
    }
}


onButton.addEventListener('click', gameOn);
function gameOn() {
    if (onButton.value == 'ON') {
        on = true;
        console.log('GameOn');
        $('#prompt').html("...Ready..start taking orders!...");
    } else {
        on = false;
        $('#prompt').html("...Game is off...");
        clearBackground();
        clearInterval(levelInterval);
        levelCounter.innerHTML = 0;
    }
}

startBtn.addEventListener('click', function () {
    if (on == true) {
        playGame();
        console.log('GameReady');
    } else {
        console.log('GameNotOn');
        $('#prompt').html("turn ON to continue!");
    }
});

function playGame() {

    console.log('GameStart');
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

    levelInterval = setInterval(gameTurn, 800);
}


function gameTurn() {
    $('#prompt').html("...Keep an eye on the buns!...");
    on = false;

    if (flash == level) {
        clearInterval(levelInterval);
        computerSequence = false;
        clearBackground();
        on = true;
        $('#prompt').html("...Now your turn, do you remember!...");
    }
    // Asigns the numbers 1-4 
    if (computerSequence) {
        clearBackground();
        setTimeout(function () {
            if (sequence[flash] == 1) {
                one();
                audio1.play();
            }
            if (sequence[flash] == 2) {
                two();
                audio2.play();
            }
            if (sequence[flash] == 3) {
                three();
                audio3.play();
            }
            if (sequence[flash] == 4) {
                four();
                audio4.play();
            }
            flash++;
        }, 400);
    }

}

function one() {
    cinRoll.style.backgroundColor = "cornflowerblue";       
}

function two() {
    bread.style.backgroundColor = "#ff69b4";
}


function three() {
    painAu.style.backgroundColor = "rgb(221, 185, 64)";
}


function four() {
    faCake.style.backgroundColor = "rgb(105, 237, 100)";
}


function clearBackground() {
    cinRoll.style.backgroundColor = "transparent";
    bread.style.backgroundColor = "transparent";
    painAu.style.backgroundColor = "transparent";
    faCake.style.backgroundColor = "transparent";
    cinRoll.style.border = " brown solid 1px";
    bread.style.border = " brown solid 1px";
    painAu.style.border = " brown solid 1px";
    faCake.style.border = " brown solid 1px";
}

function flashColor() {
    cinRoll.style.border = "brown solid 1px";
    bread.style.border = "brown solid 1px";
    painAu.style.border = "brown solid 1px";
    faCake.style.border = "brown solid 1px";
    $('.game-tile-area').addClass('animateBun', 500);
    if (on == true) {
        setTimeout(function () {
            clearColor();
        }, 400);
    }

}
function clearColor() {
    cinRoll.style.border = "none";
    bread.style.border = "none";
    painAu.style.border = "none";
    faCake.style.border = "none";
    $('.game-tile-area').removeClass('animateBun', 500);
}


cinRoll.addEventListener('click', function () {
    if (on == true) {
        playerSequence.push(1);
        checkAnswer();
        one();
        audio1.play();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 200);
        }
    }
});

bread.addEventListener('click', function () {
    if (on == true) {
        playerSequence.push(2);
        checkAnswer();
        two();
        audio2.play();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 200);
        }
    }
});

painAu.addEventListener('click', function () {
    if (on == true) {
        playerSequence.push(3);
        checkAnswer();
        three();
        audio3.play();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 200);
        }
    }
});

faCake.addEventListener('click', function () {
    if (on == true) {
        playerSequence.push(4);
        checkAnswer();
        four();
        audio4.play();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 200);
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

function checkAnswer() {
    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1])
        good = false;

    else if (playerSequence.length == 20 && good) {
        winGame();
    }
    playError();
    nextLevel();
}

function playError() {
    if (good == false) {
        flashColor();
        $('#prompt').html("OH NO you made a mistake!");
        setTimeout(function () {
            levelCounter.innerHTML = level;
            clearBackground();

            if (hard) {
                playGame();
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
    $('#prompt').html("You WON the Game!");
    on = false;
    win = true;
}


// from w3 schools
function speechBubble() {
    var popup = document.getElementById("gameBubble");
    popup.classList.toggle("show");
}