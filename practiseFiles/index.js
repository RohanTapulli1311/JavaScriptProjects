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
//addeventlistner

let openBoxEl = document.getElementById('open-box')

openBoxEl.addEventListener("click", function(){
    console.log("I want to open the box")
})

const divEl = document.getElementById('container')

divEl.innerHTML = "<button onclick='buy()'>Buy Now!</button>"

function buy(){
    divEl.innerHTML +="<p>thanks for buying!</p>"
    //divEl.textContent="thanks for buying!"
}

//practise template strings

const recipient ="James"

const email1 ="Hey "+ recipient+"! How is it going bro? hope u are fine"
const email2 =`Hey ${recipient}! How is it going bro? hope u are fine`
console.log(email1)
console.log(email2)

const sender = "Rohan"
const email3 =`Hey ${recipient}!
How is it going bro? hope u are fine. 
Cheers ${sender}`
console.log(email3)

let myCourses = ["JavaScript","React","Django","ML","Deep Learning"]

function displayCourse(courses){
    console.log("my courses are:")
    for(let i=0; i<courses.length;i++){
        console.log(courses[i])
    }
}

displayCourse(myCourses)

//localStorage practise

//localStorage.setItem("myCourses",JSON.stringify(myCourses))
console.log(JSON.parse(localStorage.getItem("myCourses")))

//sentence generator

function sentenceGenerator(desc, arr){
    let count =arr.length
    let sentence = "the "+count+" "+desc+" are "
    for(let i=0;i<count;i++){

        sentence +=arr[i]+", "
    }
    console.log(sentence)
}

sentenceGenerator("largest countries",["China","India"])

//images
const imgs=[
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const imgDIV = document.getElementById('img-cont')
imgsdom =""
for( let i=0;i<imgs.length;i++){
    imgsdom += `<img class='team-images' src = '${imgs[i]}'>`
}
imgDIV.innerHTML = imgsdom