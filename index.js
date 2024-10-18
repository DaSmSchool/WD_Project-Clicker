var clickTimes = 0
var studentsEntered = 0

const countEl = document.getElementById("count-el")
const prevEl = document.getElementById("prev-el")
const hiredEl = document.getElementById("hired-el")
const hiredCount = document.getElementById("hired-count")

function increment() {
    studentsEntered += 1
    countEl.innerText = studentsEntered
    console.log(studentsEntered)
    setTimeout(() => {
        increment()
    }, 1000);
}

function incr_clicked() {
    clickTimes += 1
    hiredCount.innerText = "" + clickTimes
    increment()
}

function save() {
    prevEl.innerText += clickTimes + "-"
}

function init() {
    countEl.innerText = 0
    prevEl.innerText += "\n"
}

init()