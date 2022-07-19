let kontostand = 100;
document.querySelector("#konto").innerHTML = kontostand + "€";

function run () {
    
    let dice = Math.round(Math.random ()* 5 + 1);   
    let diceTwo = Math.round(Math.random ()* 5 + 1); 
    let diceThree = Math.round(Math.random ()* 5 + 1); 
       
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


function run () {
    
    let dice = Math.round(Math.random ()* 5 + 1);   
   
    if (dice == 6){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six";
           
    } else if (dice == 5){ 
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five";
       
    }else if (dice == 4 ){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four";
       
    }else if (dice == 3){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three";
       
    }else if (dice == 2){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two";
       
    }else {
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one";
    }


// Dice2 
    let diceTwo = Math.round(Math.random ()* 5 + 1); 
    if (diceTwo == 6){
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-six wurfel2";
       
    } else if (diceTwo == 5){ 
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-five wurfel2";
       
    }else if (diceTwo == 4 ){
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-four wurfel2";
       
    }else if (diceTwo == 3){
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-three wurfel2";
       
    }else if (diceTwo == 2){
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-two wurfel2";
       
    }else {
        document.querySelector(".wurfel2").classList = "fa-solid fa-dice-one wurfel2";
    }
    
// Dice2 
    let diceThree = Math.round(Math.random ()* 5 + 1); 
    if (diceThree == 6){
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-six wurfel3";
       
    } else if (diceThree == 5){ 
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-five wurfel3";
       
    }else if (diceThree == 4 ){
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-four wurfel3";
       
    }else if (diceThree == 3){
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-three wurfel3";
       
    }else if (diceThree == 2){
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-two wurfel3";
       
    }else {
        document.querySelector(".wurfel3").classList = "fa-solid fa-dice-one wurfel3";
    }

    if (dice == diceTwo && dice == diceThree && diceTwo == diceThree){
        kontostand = kontostand + 50;
    } else {
        kontostand = kontostand - 1;
    }

    document.querySelector("#konto").innerHTML = kontostand + "€";
}



function revert() {
    let kontostand = 100;
    document.querySelector("#konto").innerHTML = kontostand + "€";
    document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one";
    document.querySelector(".wurfel3").classList = "fa-solid fa-dice-one wurfel3";
    document.querySelector(".wurfel2").classList = "fa-solid fa-dice-one wurfel2";
}


