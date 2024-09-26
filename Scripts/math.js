const info = document.getElementById("info");
const guess = document.getElementById("guess");
const sub = document.getElementById("btn");
const feedback = document.getElementById("feed");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const shakeElement = document.querySelector(".squ");
const tabs = document.getElementById("tabs");


function format() {
    // const selTabs = document.querySelectorAll(".tabs")
    // selTabs.style.right = scoreEl.getBoundingClientRect().right + "px"

}

format();

document.addEventListener("resize", format)

document.addEventListener("submit", (e) => {
    if(!waiting) {
        return;
    }
    shakeElement.classList.add("animate");
    feedback.textContent = "Generating..."
    document.body.style.backgroundColor = "white";
    setTimeout(function () {
      shakeElement.classList.remove("animate");
      genNumb()
      feedback.textContent = `what is ${currNumb} squared`;
      waiting = false;
      sub.textContent = "Guess"
      document.body.style.backgroundColor = "white";
      strikes = 0;
      feedback.textContent = `What is ${currNumb} squared`
      // strikes = 0;
    //   return;
    }, 1000); 
});


let strikes = 0;
let waiting = false;
let score = 0;
let best = localStorage.getItem("best") || 0;

bestEl.textContent = best;

let currNumb = Math.round(Math.random() * (30 - 1) + 1)

const genNumb = () => {
    currNumb = Math.round(Math.random() * (30 - 1) + 1);
    info.textContent = currNumb + "²";
    guess.value = "";
}

function setScores(setter) {
    if(setter === 1) {
        score++;
        if(score >= best) {
            best = score;
            localStorage.setItem("best", score.toString());
            bestEl.textContent = best;
        }
    } else {
        score = 0;
    }
    scoreEl.textContent = score;
}

info.textContent = currNumb.toString()

document.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(waiting === true) {
        // genNumb()
        // feedback.textContent = `what is ${currNumb} squared`;
        // waiting = false;
        // sub.textContent = "Guess"
        // // strikes = 0;
        // return;
    }
    if(!shakeElement.classList.contains("animate")){
    feedback.textContent = 2 - strikes + " guesses left";
}
    if(currNumb * currNumb == guess.value){
        genNumb();
        setScores(1);
        strikes = 0;
        document.body.style.backgroundColor = "white";
        feedback.textContent = `what is ${currNumb} squared`;
        return;
    } else {
        if(strikes < 2) {
            strikes++;
            if(strikes == 1) {
                document.body.style.backgroundColor = "yellow";
            } else if(strikes == 2) {
                document.body.style.backgroundColor = "red";
            }
            // strikes++;
        } else {
            setScores(-1);
            feedback.textContent = "The answer was " + currNumb*currNumb + " press enter to continue";
            document.body.style.backgroundColor = "white";
            strikes = 0;
            sub.textContent = "Continue"
            waiting = true
        }
    }

})