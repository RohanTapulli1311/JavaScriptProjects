let myLeads =["www.abc.com","www.def.com","www.ghi.com"]
//Always if possible use const, if not then let
// we are using const cuz we dont want to change the input text
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log("button clicked from eventlistener")
    console.log(myLeads)
})

const ulEl = document.getElementById('ul-el')

for(let i=0; i<myLeads.length;i++){
    //ulEl.textContent += myLeads[i]
    ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"
}