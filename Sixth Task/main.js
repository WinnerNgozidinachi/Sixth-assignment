let scoreLabels = 0
let plusBtn = document.getElementById("scoreNumber1");

function points1() {
    scoreLabels += 1
    plusBtn.innerText = scoreLabels
}


let twoPoints = document.getElementById("scoreNumber1");

function points2() {
    scoreLabels += 2
    twoPoints.innerText = scoreLabels
}

let fourPoints = document.getElementById("scoreNumber1");


function points3() {
    scoreLabels += 4
    fourPoints.innerText = scoreLabels
}


let saveEl = document.getElementById("save-el")
let saveHolder = document.getElementById("count-el")


function save() {
    let saveBtn = scoreLabels + " - "
    saveEl += saveBtn 
    saveHolder.textContent += saveBtn
    plusBtn.innerText= 0
    twoPoints.innerText = 0
    fourPoints.innerText = 0
    scoreLabels = 0
}
save()


let scoreLabels2 = 0
let plusBtn2 = document.getElementById("scoreNumber2");

function points4() {
    scoreLabels2 += 1
    plusBtn2.innerText = scoreLabels2
}


let twoPoints2= document.getElementById("scoreNumber2");

function points5() {
    scoreLabels2 += 2
    twoPoints2.innerText = scoreLabels2
}


let fourPoints2 = document.getElementById("scoreNumber2")

function points6() {
    scoreLabels2 += 4
    fourPoints2.innerText = scoreLabels2
}


let saveEl2 = document.getElementById("save-el2")
let saveCount = document.getElementById("count-el2")


function save2() {
    let saveBtn = scoreLabels2 + " - "
    saveEl2 += saveBtn 
    saveCount.textContent += saveBtn
    plusBtn2.innerText= 0
    twoPoints2.innerText = 0
    fourPoints2.innerText = 0
    scoreLabels2 = 0
}
save2()

