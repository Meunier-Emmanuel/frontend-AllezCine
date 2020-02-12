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
//genre 

const genres = [{
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Aventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comédie"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentaire"
    },
    {
        "id": 18,
        "name": "Drame"
    },
    {
        "id": 10751,
        "name": "Familial"
    },
    {
        "id": 14,
        "name": "Fantastique"
    },
    {
        "id": 36,
        "name": "Histoire"
    },
    {
        "id": 27,
        "name": "Horreur"
    },
    {
        "id": 10402,
        "name": "Musique"
    },
    {
        "id": 9648,
        "name": "Mystère"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science-Fiction"
    },
    {
        "id": 10770,
        "name": "Téléfilm"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "Guerre"
    },
    {
        "id": 37,
        "name": "Western"
    }
]



async function getupComing() {
    let data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1")
    let response = await data.json()
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`#film${i}`).setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[i].backdrop_path)
        console.log(i);

    }
}
getupComing()

//movies 
async function getDataTopRate() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1")
    let response = await data.json()
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#imgCard${i}`).setAttribute("src", "https://image.tmdb.org/t/p/w200" + response.results[i].backdrop_path)
        document.querySelector(`#cardTitle${i}`).textContent = response.results[i].title
        document.querySelector(`#cardDate${i}`).textContent = response.results[i].release_date
        document.querySelector(`#cardGenre${i}`).textContent = response.results[i].
        console.log(response)
    }
}
getDataTopRate()




//footer bouton
let boutonVersTop = document.createElement("button");
boutonVersTop.setAttribute("class", "col-1 col-md-1 offset-md-10");
boutonVersTop.setAttribute("id", "arrowUp");
document.getElementById("reseauxSociaux").appendChild(boutonVersTop);

let icon = document.createElement("i");
icon.setAttribute("class", "far fa-arrow-alt-circle-up fa-2x");
icon.setAttribute("id", "imgLien")
document.getElementById("arrowUp").appendChild(icon);

document.getElementById("reseauxSociaux").addEventListener("click", () => {
    document.getElementById("header").scrollIntoView(true, {
        behaviour: "smooth"
    });
});

let hauteurY = document.getElementById("header").offsetHeight;
let positionYtop = document.getElementById("header").offsetTop;
let positionYbottom = positionYtop + hauteurY;