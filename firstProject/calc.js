let num1 = 8
let num2 = 10

let spanEl1 = document.getElementById('el-1')
let spanEl2 = document.getElementById('el-2')
let answerDisp = document.getElementById('answer')
spanEl1.textContent = num1
spanEl2.textContent = num2
let ans = 0
function add(){
 ans = num1+num2
 document.getElementById('answer').textContent = "sum:" + ans
}

function sub(){
    ans = num1-num2
    document.getElementById('answer').textContent = "difference:" + ans
}

function mul(){
    ans = num1*num2
    document.getElementById('answer').textContent = "multiplication:" + ans
}
function divide(){
    ans = num1/num2
    document.getElementById('answer').textContent = "division:" + ans
}



