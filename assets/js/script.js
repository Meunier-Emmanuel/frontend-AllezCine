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

let hauteurY = document.getElementById("header").offsetHeight;
let positionYtop = document.getElementById("header").offsetTop;
let positionYbottom = positionYtop + hauteurY;
