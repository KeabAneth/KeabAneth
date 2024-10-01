const title = document.getElementById("title");
const boards = document.getElementById("boards");
const instruct = document.getElementById("instruct");
let selectedGamemode = "VS BOT";
let p2Board;
checkTitle();
window.addEventListener("resize", () => {
    checkTitle(); 
    formatStartBg();
    });

const main = document.getElementById("main");

let mainInfo = main.getBoundingClientRect();

function formatStartBg() {
    mainInfo = boards.getBoundingClientRect();
    if (main) {
        // if (!p2Board) {
        startGameOverlay.style.width = mainInfo.width + "px";
        startGameOverlay.style.height = mainInfo.height + "px";
        startGameOverlay.style.left = mainInfo.left + "px";
        startGameOverlay.style.top = mainInfo.top + "px";
    // } else {
        console.log("p2")
        // let main2Info = p2Board.getBoundingClientRect();
        // startGameOverlay.style.width = mainInfo.width + main2Info.width + "px";
        // startGameOverlay.style.height = mainInfo.height + main2Info.height + "px";
    // }
    }
}

function checkTitle() {
    if (visualViewport.width < 633) {
        title.textContent = "Play RPS!"
    } else {
        title.textContent = "Play Rock Paper Scissors!"
    }

}
//end format
const gamemode = document.getElementById("gamemode")

gamemode.addEventListener("click", e => {
    changeSelected(e.target, e.currentTarget);
    formatStartBg();
});

function gamemodeAnim(target) {
    

}
try{

function changeSelected(target, container) {
    const cont = container.children;
    if (target !== container && target.textContent !== selectedGamemode) {
    for (const parts of cont) {
        if (parts.classList.contains("selected")) {
            parts.classList.remove("selected");
        }
    }
    target.classList.add("selected");

    if (container.id === "gamemode") {
        gamemodeAnim(target);
        selectedGamemode = target.textContent;
        changeGamemode(selectedGamemode)
    }
}
}
} catch(err) {
    instruct.textContent = err;
}
function changeGamemode(gm) {
    if (gm === "VS BOT") {
        console.log("vsbot");
        if (p2Board) {
            p2Board.remove();
        }
    } else {
        p2Board = main.cloneNode(true);
        p2Board.id = "main2";
        boards.append(p2Board);
    }
}

function startGame() {
    startGameOverlay.style.display = "none";
    gamemode.style.display = "none";
    if (selectedGamemode === "VS BOT") {
        instruct.textContent = "Choose either rock paper or scissors.";
    }
}

function botChoose() {
    const randNum = Math.random();
    if (randNum > 0.33 && randNum < 0.66) {
        return "r";
    } else if (randNum > 0.66) {
        return "p";
    } else if (randNum < 0.33) {
        return "s";
    }
}

const startGameOverlay = document.createElement("div");
startGameOverlay.classList.add("startBg");
startGameOverlay.style.width = mainInfo.width + "px";
startGameOverlay.style.height = mainInfo.height + "px";
startGameOverlay.style.left = mainInfo.left + "px";
startGameOverlay.style.top = mainInfo.top + "px";
const startBtn = document.createElement("button");

startBtn.textContent = "Start";
startBtn.classList.add("startBtn")

startGameOverlay.append(startBtn)
startBtn.addEventListener("click", startGame);


document.body.append(startGameOverlay);