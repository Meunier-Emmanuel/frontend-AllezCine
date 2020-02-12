// Formulaire log / register

document.querySelector("#signUp").addEventListener("click", () => {
    document.querySelector("#sign").style.display = "block"

})
document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector("#sign").style.display = "none"

})
document.querySelector("#logIn").addEventListener("click", () => {
    document.querySelector("#login").style.display = "block"
})
document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector("#login").style.display = "none"
})

document.querySelector("#registerLink").addEventListener("click", () => {
    document.querySelector("#login").style.display = "none"
    document.querySelector("#sign").style.display = "block"
})
document.querySelector("#signLink").addEventListener("click", () => {
    document.querySelector("#login").style.display = "block"
    document.querySelector("#sign").style.display = "none"
})
document.querySelector("#buttonContact").addEventListener("click", () => {
    document.querySelector("#formContact").style.display = "block"
})



// API

async function GetDataGenre() {
    let data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr_FR")
    let response = await data.json()
    let arrayGenre = Array.from(response)
    return arrayGenre
}

async function GetDataTopRate() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1")
    let response = await data.json()
    for (let i = 1; i < 5; i++) {
        document.querySelector(`#film${i}`).setAttribute("src","https://image.tmdb.org/t/p/w200" + response.results[i].backdrop_path)
    }
}
GetDataTopRate()
