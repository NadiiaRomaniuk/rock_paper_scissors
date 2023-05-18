let stone = document.getElementById("stone");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let computer = document.getElementById("computer");

let human = document.getElementById("human");
let machine = document.getElementById("machine");

let human_keeper = 0;
let machine_keeper = 0;

let lose = document.getElementById("third-one-container");
let win = document.getElementById("third-two-container");



stone.addEventListener("click", stone_choice);
scissors.addEventListener("click", scissors_choice);
paper.addEventListener("click", paper_choice);

function switcher() {
    if (human_keeper >= 5) {
        stone.removeEventListener("click", stone_choice);
        scissors.removeEventListener("click", scissors_choice);
        paper.removeEventListener("click", paper_choice);
        second_container.style.display = "none";
        heading.style.display = "none";
        win.style.display = "flex";
        return;
    } else if (machine_keeper >= 5) {
        stone.removeEventListener("click", stone_choice);
        scissors.removeEventListener("click", scissors_choice);
        paper.removeEventListener("click", paper_choice);
        second_container.style.display = "none";
        heading.style.display = "none"
        lose.style.display = "flex";
        return;
    }
}


function stone_choice() {
   
    let randomNumber_1 =
        Math.floor(Math.random() * 3) + 1;
    
    switcher();
    
    if (randomNumber_1 === 1) {
        computer.src = "images/stone.png";
    } else if (randomNumber_1 === 2) {
        computer.src = "images/scissors.png";
        human_keeper = human_keeper + 1;
        human.innerText = human_keeper;
    } else if (randomNumber_1 === 3) {
        machine_keeper = machine_keeper + 1;
        machine.innerText = machine_keeper;
        computer.src = "images/file.png";
    }

}

function scissors_choice() {
    
    let randomNumber_2 =
        Math.floor(Math.random() * 3) + 1;
    
    switcher()

    if (randomNumber_2 === 1) {
        computer.src = "images/stone.png";
        machine_keeper = machine_keeper + 1;
        machine.innerText = machine_keeper;
    } else if (randomNumber_2 === 2) {
        computer.src = "images/scissors.png";
    } else if (randomNumber_2 === 3) {
        human_keeper = human_keeper + 1;
        human.innerText = human_keeper;
        computer.src = "images/file.png";
    }
}

function paper_choice() {
    
    let randomNumber_3 =
        Math.floor(Math.random() * 3) + 1;
    
    switcher()

    if (randomNumber_3 === 1) {
        computer.src = "images/stone.png";
        human_keeper = human_keeper + 1;
        human.innerText = human_keeper;
        
    } else if (randomNumber_3 === 2) {
        computer.src = "images/scissors.png";
        machine_keeper = machine_keeper + 1;
        machine.innerText = machine_keeper;
    } else if (randomNumber_3 === 3) {
        computer.src = "images/file.png";
    }

    
    
}