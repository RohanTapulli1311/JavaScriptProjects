let myLeads =[]
 
// myLeads = JSON.parse(myLeads)
// console.log(typeof myLeads)
// myLeads.push("www.awesomeleads.com")
// console.log(myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

//Always if possible use const, if not then let
// we are using const cuz we dont want to change the input text

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const delBtn = document.getElementById('delete-btn')
const saveTab = document.getElementById('save-btn')
//both key and value in localStorage should be strings
// thus we JSON.stringify() and JSON.parse() methods to pass array into localStorage

//localStorage.setItem("myLeads", "www.linkedin.com")
//console.log(localStorage.getItem("myLeads"))
//localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems =""
    for(let i=0; i<leads.length;i++){
        //listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems += `<li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
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

inputBtn.addEventListener("click", function(){
    if(inputEl.value!=""){
        myLeads.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(localStorage.getItem("myLeads"))
    }
    
})

// const tabs = [
//     {
//     url: 'https://www.linkedin.com/feed/'
// }
// ]
saveTab.addEventListener("click", function(){
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    //     let activeTab = tabs[0]
    // });

    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(localStorage.getItem("myLeads"))
    })
    
})

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})






