let myLeads =[]
//Always if possible use const, if not then let
// we are using const cuz we dont want to change the input text
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

const ulEl = document.getElementById('ul-el')

function renderLeads(){
    let listItems =""
    for(let i=0; i<myLeads.length;i++){
        //listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems += `<li>
            <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                    </li>`
        console.log(listItems)
        //ulEl.textContent += myLeads[i]
        //ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"
        //Alternate way- createElement, set textContent and append
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
}
