
let cards = []
let hasBlackJack = false
let sum = 0
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let sumEl = document.querySelector("#sum-el")

let player = {
    name :"Rohan",
    chips : 200
}
let playerEl = document.getElementById('player-el')
displayPlayerDetails()

function displayPlayerDetails(){
    playerEl.textContent = player.name +": $" +player.chips
}

function getRandomCard(){
   let randNum = Math.floor(Math.random()*13)+1
   if(randNum === 1){
       randNum = 11
   }
   else if(randNum>10 && randNum<=13){
       randNum=10
   }
   return randNum
}
function startGame(){
    
    if( player.chips>20){
        player.chips -=20
        isAlive = true
        hasBlackJack =false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    displayPlayerDetails()
    renderGame()
    }
    else{
        messageEl.textContent = "Sorry, insufficient Chips!"
        isAlive = false
    }
    
}
function renderGame(){
   // cardsEl.textContent ="Cards:"+ cards[0] + " " +cards[1]
   cardsEl.textContent = "Cards: "
   for( let i=0; i< cards.length;i++){
    cardsEl.textContent += cards[i]+" "
   }
    sumEl.textContent ="Sum: "+ sum
    if (sum <= 20){
        message = "Would you like to draw another card?" 
        
    }
    else if (sum === 21){
        message = "Congrats!! Youve got blackJack!!"
        
        hasBlackJack = true
        player.chips +=200
        displayPlayerDetails()
    // make sure u use === alwayss
    }
    else{
        message = "Sry, you are out!!"
        
        isAlive = false
    }
messageEl.textContent = message
console.log(message)
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
   
}


console.log(hasBlackJack)
console.log(isAlive)