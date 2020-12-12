window.onload = function () {
let esquerra=document.querySelector("article img.esquerra");
let dreta=document.querySelector("article img.dreta");
console.log(esquerra);
dreta.style.cursor = "pointer";
esquerra.style.cursor = "pointer";
esquerra.addEventListener("click",function(){
    window.location.href="https://es.fpdgi.org/";
});
dreta.addEventListener("click",function(){
    window.location.href="https://rseq.org/";
});
}