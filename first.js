let text = document.getElementById("first-text");
let text_wrapper = document.getElementById("first-text-wrapper");
let buttons = document.getElementById("first-buttons");
let button_yes = document.getElementById("yes");
let button_no = document.getElementById("no");
let button_play = document.getElementById("first-wrapper");
let heading = document.getElementsByClassName("first-container")[0]

let first_container = document.getElementsByClassName("first-changing")[0]
let second_container = document.getElementsByClassName("second-container")[0];


const text_1 = "Hello, my breathing friend. Excited?";
const text_2 = "It's a pity. Make your move";
const text_3 = "Good to play with a brave... human...ugh..."



textAppear()
const timeout_2 = setTimeout(buttonsAppear, 4000);

button_yes.addEventListener("click", choice_yes)
button_no.addEventListener("click", choice_no);
button_play.addEventListener("click", play_button)

function textAppear() {
    if (text.innerText.length === 0) {
    text.innerText = text_1;
    }
}

function buttonsAppear() {
    buttons.style.display = 'flex'; 
}

function playButtonAppear() {
    button_play.style.display = "flex";
}



function choice_yes() {
    text.style.animation = "none";
    text.offsetWidth;
    text.style.animation = "moving 4s linear";
    text.style.animationFillMode = "both";
    
    text.innerText = text_3;
    buttons.style.display = "none";
    
    setTimeout(playButtonAppear, 4000);
}

function choice_no() {
    text.style.animation = "none";
    text.offsetWidth;
    text.style.animation = "moving 4s linear";
    text.style.animationFillMode = 'both'

    text.innerText = text_2;
    buttons.style.display = "none";
    
    setTimeout(playButtonAppear, 4000)
    
}

function bigChange() {
    heading.style.height = "30svh"
    second_container.classList.add("appear_animations")
    first_container.style.display ="none";
    second_container.style.display ="flex";
}

function play_button() {
    text_wrapper.classList.add("animations")
    button_play.classList.add("animations")
    setTimeout(bigChange, 1000)
}




