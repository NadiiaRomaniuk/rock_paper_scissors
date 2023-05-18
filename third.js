let win_try = document.getElementById("third-two-button")
let lose_try = document.getElementById("third-one-button");
let original = document.getElementsByClassName("second-container")[0]


win_try.addEventListener("click", win_tryF)
lose_try.addEventListener("click", lose_tryF)

function win_tryF() {
    win.style.display = "none";
    original.style.display = "flex";
    heading.style.display = "flex";
    play_again()
}

function lose_tryF() {
    lose.style.display = "none";
    original.style.display = "flex";
    heading.style.display = "flex";
    play_again()
}

function play_again() {
    machine.innerText = "0";
    human.innerText = "0";
    stone.addEventListener("click", stone_choice);
    scissors.addEventListener("click", scissors_choice);
    paper.addEventListener("click", paper_choice);
    human_keeper = 0;
    machine_keeper = 0;
}