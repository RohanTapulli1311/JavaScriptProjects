const AddBtn = document.getElementById("add-btn")
let allBellboys = []
let numberOfInputs = document.querySelectorAll("#add-bellboy input").length
console.log(numberOfInputs)
AddBtn.addEventListener("click" , function(){
//    console.log( document.querySelectorAll('#add-bellboy input'))
 let name = document.getElementById("name").value
 let exp = document.getElementById("exp").value
 let speciality = document.getElementById("special").value
 let lang = document.getElementById("lang").value
 if(name!="" && exp!=null &&speciality!="" && lang!=""){
     newBB = new Bellboy(name,exp,speciality,lang)
     addBellboy(newBB)
 }
 else{
     alert("Input values empty!")
 }
 name=''
 exp=''
 speciality = ''
 lang = ''
})

function addBellboy(boy){
   allBellboys.push(boy)
   console.log(allBellboys)
   alert("Added bellboy!")
}










function Bellboy(name, experience, speciality,language){
 this.name = name
 this.experience = experience
 this.speciality = speciality
 this.language = language
}

