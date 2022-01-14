let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-status")
function increment(){
    count += 1
    countEl.textContent = count
    
}

function save(){
    console.log(count)
    // saveEl.innerText += count + " - " 
    //.innerText is not that comfortable with non human readable content
   // Alternative to innerText is .TextContent
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent =count
}
let errorEl = document.getElementById("error")

function ifError(){
    errorEl.textContent = "There is Some Error, pLS try again later!"
}

//tasks:
let firstName = "Rohan"
let lastName = "Tapulli"
let fullName = firstName+" "+lastName
console.log(fullName)

//task2:
let greeting = "Hi There"
function greet(){
    let myGreeting=greeting + ' ' +firstName+ ' !'
    console.log(myGreeting)
}
greet()
//task3

myPoints = 3
function addPoints(){
  myPoints += 3

}

function removePoints(){
 myPoints -= 1
}

addPoints()
addPoints()
addPoints()
removePoints()
removePoints()
console.log(myPoints)