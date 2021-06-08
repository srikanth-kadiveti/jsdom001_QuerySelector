b1 = document.querySelector("button")
ip = document.querySelectorAll("input")
op1 = document.querySelector(".output")


b1.addEventListener("click", showMessage)

function showMessage(){
    let message1 = `Welcome ${ip[0].value}. `
    let message2 = `You can donate a min amount of ${(ip[1].value*0.1).toFixed(2)}/- , thank you`
    op1.innerHTML =  message1+' '+message2
    
}

