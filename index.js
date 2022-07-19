

let kontostand = 100;
document.querySelector("#konto").innerHTML = kontostand + "€";

function run () {
    
    let dice = Math.round(Math.random ()* 5 + 1);   
       
    if (dice == 6){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six";
        kontostand = kontostand + 5;
       
    } else if (dice == 5){ 
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five";
        kontostand = kontostand - 1;
       
    }else if (dice == 4 ){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four";
        kontostand = kontostand - 1;
       
    }else if (dice == 3){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three";
        kontostand = kontostand - 1;
       
    }else if (dice == 2){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two";
        kontostand = kontostand - 1;
       
    }else {
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one";
        kontostand = kontostand - 1;
    }

    document.querySelector("#konto").innerHTML = kontostand + "€";
}







function revert() {
    let kontostand = 100;
    document.querySelector("#konto").innerHTML = kontostand + "€";
    document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one";
}


