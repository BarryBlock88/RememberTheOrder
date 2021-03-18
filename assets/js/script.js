let sequence = [];
let playersequence = [];
let flash;
let level;
let good;
let computerSequence;
let levelInterval;
let strict = false;
let sound = true;
let on = false;
let win;


let bread = document.getElementById('bread');
let cinRoll = document.getElementById('cinnimon-roll');
let painAu = document.getElementById('pain-au-chocolat');
let faCake = document.getElementById('fairy-cake');


let startBtn = document.getElementById('startbtn');
let levelCounter = document.getElementById('score');
let onButton = document.getElementById('onBtn')

onButton.addEventListener('click', gameOn)

function gameOn() {
    console.log('GameOn')
    if (onButton.checked == true) {
        on == true;
        levelCounter.innerHTML = "<h3>Ready!</h3>";
    } else {
        on == false;
        levelCounter.innerHTML = "<h3>Oven Off-></h3>"
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
    level = 1;
    levelInterval = 0;
    levelCounter.innerHTML = 1
    good = true;
    for (let i = 0; i < 30; i++) {
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

    if (computerSequence) {
        clearBackground();
        setTimeout(function () {
            if (sequence[flash] = 1) one();
            if (sequence[flash] = 2) two();
            if (sequence[flash] = 3) three();
            if (sequence[flash] = 4) four();
            flash++;
        }, 500)
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



cinRoll.addEventListener( 'click', function () {
    if (on) {
        playersequence.push(1);
        //checkAnswer();
        one();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 300);
        }
    }
});

bread.addEventListener('click', function () {
    if (on) {
        playersequence.push(2);
        //checkAnswer();
        two();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 300);
        }
    }
});

painAu.addEventListener('click', function () {
    if (on) {
        playersequence.push(3);
        //checkAnswer();
        three();
        if (!win) {
            setTimeout(function () {
                clearBackground();
            }, 300);
        }
    }
});

faCake.addEventListener('click', function () {
    if (on) {
        playersequence.push(4);
        //checkAnswer();
        four();
        if (!win) {
            setTimeout(function () {
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