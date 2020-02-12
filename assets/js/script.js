
// Formulaire log / register

document.querySelector("#signUp").addEventListener("click",()=>{
    document.querySelector("#sign").style.display= "block"
    
})
document.querySelector(".cancel").addEventListener("click",()=>{
    document.querySelector("#sign").style.display= "none"
    
})
document.querySelector("#logIn").addEventListener("click",()=>{
    document.querySelector("#login").style.display= "block"
})
document.querySelector("#cancel").addEventListener("click",()=>{
    document.querySelector("#login").style.display= "none"
})

document.querySelector("#registerLink").addEventListener("click",()=>{
    document.querySelector("#login").style.display= "none"
    document.querySelector("#sign").style.display= "block"
})
document.querySelector("#signLink").addEventListener("click",()=>{
    document.querySelector("#login").style.display= "block"
    document.querySelector("#sign").style.display= "none"
})
document.querySelector("#buttonContact").addEventListener("click",()=>{
    document.querySelector("#formContact").style.display= "block"
})




