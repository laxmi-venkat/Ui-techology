let firstCard = 10;
let secondCard = 4;
let sum=firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message ="";
let sumEl = document.querySelector("sum-el");
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
function startGame(){
  cardsEl.textContent = "cards:"+firstCard+" "+secondCard
  sumEl.textContent ="Sum:"+sum
  if(sum<=20){
    message="Do you want to draw a new card?"

  } else if(sum ===21){
     message ="Wohoo! You've got Blackjack!";
  }  else {
       message = "You've out of the game!"
       isAlive = false;
  }
  messageEl.textContent=  message
   
}
function startGame(){
       console.log("Drwing a new card from the deck!");
     let card =6;
     sum+=card
     startGame(); 
}