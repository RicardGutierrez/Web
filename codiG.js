window.onload = function () {
let dades = {
    article: [
        { imatge: "FOTOS/Equip recerca de la Silvia.png", titol: 'Equip recerca de la Silvia' },
        { imatge: "FOTOS/Premio Fundación Princesa de Girona Investigación Científica   2016.jpg", titol: 'Premio Fundación Princesa de Girona Investigación Científica 2016' },
        { imatge: "FOTOS/Premio Fundación Princesa de Girona Investigación Científica   2016 2.jpg", titol: 'Premio Fundación Princesa de Girona Investigación Científica 2016' },
        { imatge: "FOTOS/Sílvia Osuna Premi FPdGi de Recerca Científica 2016.jpg", titol: 'Sílvia Osuna Premi FPdGi de Recerca Científica 2016', link: 'https://www.youtube.com/watch?v=VYH4ti4qUOA' },
        { imatge: "FOTOS/1280px-YouTube_Logo.svg.png" }
    ],
}

let fotoP = document.querySelector(".fotoP");
let fotos = document.querySelectorAll("article div.foto div");


let txt = document.createElement('p');
let imgP = document.createElement('img');

let enllaç = document.createElement('a');
let youtube = document.createElement('img');

txt.textContent = dades.article[0].titol;
imgP.src = dades.article[0].imatge;
fotoP.appendChild(txt);
fotoP.appendChild(imgP);


for (let i = 0; i < 4; i++) {
    let img = document.createElement('img');
    img.src = dades.article[i].imatge;
    fotos[i].appendChild(img);
    fotos[i].style.cursor = "pointer";
}

fotos[0].addEventListener("click", foto1);
fotos[1].addEventListener("click", foto2);
fotos[2].addEventListener("click", foto3);
fotos[3].addEventListener("click", foto4);


function foto1() {
    imgP.src = dades.article[0].imatge;
    txt.textContent = dades.article[0].titol;
    if (document.querySelector("article div.fotoP a")) {
        fotoP.removeChild(enllaç);
    }

}
function foto2() {
    imgP.src = dades.article[1].imatge;
    txt.textContent = dades.article[1].titol;
    if (document.querySelector("article div.fotoP a")) {
        fotoP.removeChild(enllaç);
    }


}
function foto3() {
    imgP.src = dades.article[2].imatge;
    txt.textContent = dades.article[2].titol;
    if (document.querySelector("article div.fotoP a")) {
        fotoP.removeChild(enllaç);
    }
}


function foto4() {


    youtube.src = dades.article[4].imatge;
    youtube.className = "Youtube"

    enllaç.href = dades.article[3].link;
    enllaç.target = "_blank";


    imgP.src = dades.article[3].imatge;
    txt.textContent = dades.article[3].titol;
    enllaç.appendChild(youtube);
    fotoP.appendChild(enllaç);
}
}
