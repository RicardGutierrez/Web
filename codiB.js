window.onload = function () {
    let molecula=document.querySelector("div div");
    molecula.style.cursor = "pointer";
molecula.addEventListener("click", function() {
    let num= prompt("Quina molecula és: \nA)Aigua \nB)Oxigen \nC)Ferro");
            if (num=='A'){
                alert("Correcta");
            }
            else{
                alert("Incorrecta");
            }
});
}