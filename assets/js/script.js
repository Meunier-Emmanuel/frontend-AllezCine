// Formulaire log / register

document.querySelector("#signUp").addEventListener("click", () => {
    document.querySelector("#sign").style.display = "block"

});
document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector("#sign").style.display = "none"

});
document.querySelector("#logIn").addEventListener("click", () => {
    document.querySelector("#login").style.display = "block"
});
document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector("#login").style.display = "none"
});

document.querySelector("#registerLink").addEventListener("click", () => {
    document.querySelector("#login").style.display = "none"
    document.querySelector("#sign").style.display = "block"
});
document.querySelector("#signLink").addEventListener("click", () => {
    document.querySelector("#login").style.display = "block"
    document.querySelector("#sign").style.display = "none"
});
document.querySelector("#buttonContact").addEventListener("click", () => {
    document.querySelector("#formContact").style.display = "block"
});



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
];


async function getupComing() {
    let data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1");
    let response = await data.json();
    // console.log(response);
    let id = [];
    response.results.forEach(element => {
        id.push(element.id);
    });
    let trailer = "";
    let compt = 1;
    id.forEach(async element => {
        trailer = await fetch(`https://api.themoviedb.org/3/movie/${element}/videos?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR`)
        trailer = await trailer.json()
        compt++
        // document.querySelector("#trailer").setAttribute("src",`https://www.youtube.com/watch?v=${trailer.results[compt].key}`)
        // problème qu'un seul bouton -> carousel -> crée nouveau bouton ou un timer pour que la source change en même temps que les photos
    });
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`#film${i}`).setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[i].backdrop_path)
    }
}
getupComing();

//movies 
async function getDataTopRate() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1");
    let response = await data.json()
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#imgCard${i}`).setAttribute("src", "https://image.tmdb.org/t/p/w200" + response.results[i].backdrop_path);
        document.querySelector(`#cardTitle${i}`).textContent = response.results[i].title;
        let date = response.results[i].release_date.slice(0, 4);
        document.querySelector(`#cardDate${i}`).textContent = date;
        let tab = [];
        response.results[i].genre_ids.forEach(el => {
            genres.forEach(e => {
                if (el === e.id) {
                    tab.push(e.name)
                }
            })
        })
        document.querySelector(`#cardGenre${i}`).textContent = tab.toString()
    }

};
getDataTopRate();

//footer bouton
let boutonVersTop = document.createElement("button");
boutonVersTop.setAttribute("class", "col-1 col-md-1 offset-md-10");
boutonVersTop.setAttribute("id", "arrowUp");
document.getElementById("reseauxSociaux").appendChild(boutonVersTop);

let icon = document.createElement("i");
icon.setAttribute("class", "far fa-arrow-alt-circle-up fa-2x");
icon.setAttribute("id", "imgLien")
document.getElementById("arrowUp").appendChild(icon);

document.getElementById("reseauxSociaux").addEventListener("click", () =>{
    document.getElementById("header").scrollIntoView(true, {behaviour:"smooth"});
});


document.getElementById("moreFeatures").addEventListener("click", () => {
    let hide = Array.from(document.getElementsByClassName("hide"));
    console.log(hide);

    hide.forEach(element => {
        element.style.display = "flex";
    });
    document.getElementById("moreFeatures").style.display = "none";
    document.getElementById("lessFeatures").style.display = "flex";
    document.getElementById("lessFeatures").addEventListener("click", () => {
        hide.forEach(element => {
            element.style.display = "none";
        });
        document.getElementById("lessFeatures").style.display = "none";
        document.getElementById("moreFeatures").style.display = "flex";
    });
});

async function getPopular() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1");
    let response = await data.json()
    let l = 0
    let j = 0
    let k = 0
    let movieFeature = document.querySelectorAll(".feature")
    let titleFeature = document.querySelectorAll(".titleFeature")
    let yearFeature = document.querySelectorAll(".yearFeature")
    titleFeature.forEach(e => {

            e.textContent = response.results[j].title
            j++
    });
    yearFeature.forEach(e => {

            e.textContent = response.results[l].release_date.slice(0, 4)
            l++
    });
    movieFeature.forEach(e => {
            e.removeAttribute("src")
            e.setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[k].backdrop_path)
            k++
    });
}
getPopular()


async function getAction() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1");
    let response = await data.json()
    let k = 0
    let movieFeature = document.querySelectorAll(".feature")
    let titleFeature = document.querySelectorAll(".titleFeature")
    let yearFeature = document.querySelectorAll(".yearFeature")
                    for (let j = 0; j < response.results.length; j++) {
                        console.log(response.results[j]);
                        if(response.results[j].genre_ids.includes(28) === true ){
                                titleFeature[k].innerHTML = response.results[j].title
                                movieFeature[k].removeAttribute("src")
                                movieFeature[k].setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[j].backdrop_path)
                                yearFeature[k].innerHTML = response.results[j].release_date.slice(0, 4)
                                k++
                                console.log(k);
                            if(k===11)
                            break
                        
                    }
                    }
}
async function getFant() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fce8cbf1171b45ecfb9db01f98832cef&language=fr-FR&page=1");
    let response = await data.json()
    let k = 0
    let movieFeature = document.querySelectorAll(".feature")
    let titleFeature = document.querySelectorAll(".titleFeature")
    let yearFeature = document.querySelectorAll(".yearFeature")
                    for (let j = 0; j < response.results.length; j++) {
                        console.log(response.results[j]);
                        if(response.results[j].genre_ids.includes(14) === true ){
                                titleFeature[k].innerHTML = response.results[j].title
                                movieFeature[k].removeAttribute("src")
                                movieFeature[k].setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.results[j].backdrop_path)
                                yearFeature[k].innerHTML = response.results[j].release_date.slice(0, 4)
                                k++
                                console.log(k);
                            if(k===11)
                            break
                        
                    }
                    }
}
document.querySelector(".fantastique").addEventListener("click", () => {
    document.querySelector(".all").style.background="white"
    document.querySelector(".all").style.color="black"
    document.querySelector(".action").style.background="white"
    document.querySelector(".action").style.color="black"
    document.querySelector(".fantastique").style.color="white"
    document.querySelector(".fantastique").style.background="red"
    
    getFant()
   
})
document.querySelector(".action").addEventListener("click", () => {
    getAction()
    document.querySelector(".all").style.background="white"
    document.querySelector(".all").style.color="black"
    document.querySelector(".action").style.color="white"
    document.querySelector(".action").style.background="red"
    document.querySelector(".fantastique").style.background="white"
    document.querySelector(".fantastique").style.color="black"
    
    
})

// shopmovie
let shopCardId = ["shop0", "shop1", "shop2", "shop3", "shop4", "shop5", "shop6", "shop7"];
let shopMovies = [];
let cardActive;
for (element of shopCardId) {
    shopMovies.push(document.getElementById(element));
};
let source = "https://www.youtube.com/embed/BQMHRQvRmGQ";//aller chercher trailers Api
let descriptionShop = "description film qui correspond à celui de card via api";//descriptions Api
let genreShop = "idem descr";
shopMovies.forEach(element => {
    function detail(element) {
        document.getElementById('detailsShopMoviesId').style.display = "block";
        document.getElementById('trailerShopMovie').setAttribute('src',source);
        document.getElementById('detailTitle').innerHTML = element.getElementsByClassName('card-title').item(0).innerHTML;
        document.getElementById('detailDescription').innerHTML = descriptionShop;
        document.getElementById('detailRelease').innerHTML = element.getElementsByClassName('card-text').item(0).innerHTML;
        document.getElementById('detailGenre').innerHTML = genreShop;
        document.getElementById('detailPrice').innerHTML = element.getElementsByClassName('card-text').item(1).innerHTML;
    }

    element.addEventListener("click", () => {    
        detail(element);
        cardActive = shopMovies.indexOf(element);
    });
    
    document.getElementById('previousShopMovie').addEventListener("click", () => {
        if (!shopMovies[--cardActive]) { cardActive = shopMovies.length - 1; }
        detail(shopMovies[cardActive]);
    });

    document.getElementById('nextShopMovie').addEventListener("click", () => {
        if (!shopMovies[++cardActive]) { cardActive = 0; }
        detail(shopMovies[cardActive]);
    });
});
document.getElementById('previousShopMovie').addEventListener("click", () => {
    if (!shopMovies[--cardActive]) { cardActive = shopMovies.length - 1; }
    detail(shopMovies[cardActive]);
});
document.getElementById('nextShopMovie').addEventListener("click", () => {
    if (!shopMovies[++cardActive]) { cardActive = 0; }
    detail(shopMovies[cardActive]);
});