function buttonAnswerOne() {
    let textbox = document.getElementById('answerOne')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionTwo");
    if (text === "yes") {
        displayAnswer.style.display = "block";
    } else {
        displayAnswer.style.display = "none";
    }
}

function buttonAnswerTwo () {
    let textbox = document.getElementById('answerTwo')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionThree");
    if (text === "it") {
        displayAnswer.style.display = "block";
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerThree () {
    let textbox = document.getElementById('answerThree')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFour");
    if (text === "your mustache is amazing") {
        displayAnswer.style.display = "block";
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerFourAnd1 () {
    let textbox = document.getElementById('answerFourAnd1/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFourTwo");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Cattywampus'
        document.getElementById('for').style.color = 'orange'
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerFourAnd2 () {
    let textbox = document.getElementById('answerFourAnd2/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFourThree");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Flibbertigibbet'
        document.getElementById('for').style.color = 'blue'
    } else {
        displayAnswer.style.display = "none";
    }
}

function buttonAnswerFourAnd3 () {
    let textbox = document.getElementById('answerFourAnd3/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFourFour");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Eight'
        document.getElementById('for').style.color = 'goldenrod'
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerFourAnd4 () {
    let textbox = document.getElementById('answerFourAnd4/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFourFive");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Fartlek'
        document.getElementById('for').style.color = 'red'
    } else {
        displayAnswer.style.display = "none";
    }
}

function buttonAnswerFourAnd5 () {
    let textbox = document.getElementById('answerFourAnd5/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFourSix");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Nincompoop'
        document.getElementById('for').style.color = 'green'
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerFourAnd6 () {
    let textbox = document.getElementById('answerFourAnd6/6')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionFive");
    if (text === "") {
        displayAnswer.style.display = "block";
        document.getElementById('for').innerText = 'Four'
        document.getElementById('for').style.color = 'black'
    } else {
        displayAnswer.style.display = "none";
    }
}
function buttonAnswerFive () {
    let textbox = document.getElementById('answerFive')
    let text = textbox.value
    console.log(text)

    let displayAnswer = document.getElementById("questionSix");
    if (text === "is me dumb") {
        displayAnswer.style.display = "block";
    } else {
        displayAnswer.style.display = "none";
    }
}