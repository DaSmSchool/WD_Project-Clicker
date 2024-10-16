var clickTimes = 0

const countEl = document.getElementById("count-el")

function increment() {
    clickTimes += 1
    countEl.innerText = clickTimes
    console.log(clickTimes)
}

function init() {
    countEl.innerText = 0
}

init()