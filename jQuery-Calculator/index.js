

$('.calc-btn').on("click",function(){
    console.log("clicked")
    console.log(this.value)
    let currentEQ = $('.calc-display').val()
    
    if(this.value==='C'){
        console.log("C FUNC")
        $('.calc-display').val('')
    }
    else if(this.value==='='){
        $('.calc-display').val(eval($('.calc-display').val())) 
    }
    else if(this.value==='<'){
        console.log("< FUNC")
        $('.calc-display').val(currentEQ.substring(0, currentEQ.length -1)) 
    }

    else{
        console.log("else FUNC")
        $('.calc-display').val($('.calc-display').val()+this.value)
    }
    
})





