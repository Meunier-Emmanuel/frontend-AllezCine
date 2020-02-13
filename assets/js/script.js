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
    // console.log(response);
    let id = []
    response.results.forEach(element => {
        id.push(element.id)
    });
    let trailer = ""
    let compt =1
    id.forEach(async element =>{
        console.log(element);
        trailer = await fetch(`https://api.themoviedb.org/3/movie/${element}/videos?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR`)
        trailer = await trailer.json()
        console.log(trailer.results[compt].key);
        compt ++
        // document.querySelector("#trailer").setAttribute("src",`https://www.youtube.com/watch?v=${trailer.results[compt].key}`)
        // problème qu'un seul bouton -> carousel -> crée nouveau bouton ou un timer pour que la source change en même temps que les photos
    });
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`#film${i}`).setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[i].backdrop_path)
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
        let date = response.results[i].release_date.slice(0,4)
        document.querySelector(`#cardDate${i}`).textContent = date
        let tab=[]
        response.results[i].genre_ids.forEach(el=>{
            console.log(el);
        genres.forEach(e=>{
            if(el === e.id){
                tab.push(e.name)
        }
        })
    })
document.querySelector(`#cardGenre${i}`).textContent =tab.toString()
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