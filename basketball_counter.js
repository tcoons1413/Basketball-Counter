

let home = 0
let homeEl = document.getElementById("home");
let guest = 0
let guestEl = document.getElementById("guest");
let intervalId;
const NUMBER_OF_MINUTES = 12
let time = NUMBER_OF_MINUTES * 60;
const countDownEl = document.getElementById("timer")
const playBTN = document.querySelector(".timerBTNStart")
playBTN.addEventListener("click", function () {
    intervalId = setInterval(upDateCountDown, 1000)
    const pauseBTN = document.querySelector(".timerBTNStop")
    console.log(time)
    pauseBTN.addEventListener("click", pause)
    function pause() {
        clearInterval(intervalId)
    }
})



function upDateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDownEl.textContent = `${minutes ? minutes : "12"}:${seconds ? seconds : "00"}`;
    if (time > 0) time--;
}



function addOne() {
    home += 1
    homeEl.textContent = home
}

function addTwo() {
    home += 2
    homeEl.textContent = home
}

function addThree() {
    home += 3
    homeEl.textContent = home
}

function addOneGuest() {
    guest += 1
    guestEl.textContent = guest
}

function addTwoGuest() {
    guest += 2
    guestEl.textContent = guest
}

function addThreeGuest() {
    guest += 3
    guestEl.textContent = guest
}

function newGame() {
    home = 0
    homeEl.textContent = home
    guest = 0
    guestEl.textContent = guest
    time = 0
    upDateCountDown()
    time = 720
    clearInterval(intervalId)
}


