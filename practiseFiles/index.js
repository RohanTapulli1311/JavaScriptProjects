let person = {
    name: "Rohan Shaji Tapulli",
    age: 20,
    country:"India"
}

function logData(){
    let message = person.name+ " is "+person.age+" years old and lives in "+person.country
    console.log(message)
}

logData()
// if else practise

let age = 25

function checkCost(){
    let message = ""
    if(age >=0 && age < 6){
        message = "free"
    }
    else if(age >=6 && age<=17){
        message = "child discount"
    }
    else if(age>17 && age <=26){
        message = "student discount"
    }
    else if(age>26 && age <=66){
        message = "full Price"
    }
    else if(age > 66){
        message = "senior citizen discount"
    }
    else{
        message = "Wrong input!"
    }
 console.log(message)
}

checkCost()
//loop

let largest = ['China','India','USA', 'Indonesia','Pakistan']
console.log("The five largest Countries in the world are:")
for( let i=0; i< largest.length;i++){
    console.log("-"+largest[i])
}

let wrgnlargest = ['Tuvalu','India','USA', 'Indonesia','morocco']
console.log("Wrong: "+wrgnlargest)

wrgnlargest.pop()
wrgnlargest.shift()
wrgnlargest.push("Pakistan")
wrgnlargest.unshift("China")
console.log("correct: "+wrgnlargest)

//random
let hands = ["Rock","Paper","Scissor"]

function RPS(){
    let randVal = Math.floor(Math.random()*3)
    console.log(randVal)
    return hands[randVal]
}

console.log(RPS())

//prac

let fruits  = ["🍎", "🍊","🍎","🍎","🍊","🍊","🍊"]
let appleEl = document.getElementById('apple-shelf')
let orangeEl =document.getElementById('orange-shelf')
function sortFruit(){
 for( let i=0;i<fruits.length;i++){
     if(fruits[i] === '🍎'){
         appleEl.textContent += fruits[i]+" "
     }
     else if(fruits[i] === '🍊'){
        orangeEl.textContent += fruits[i]+" "
    }
 }
}