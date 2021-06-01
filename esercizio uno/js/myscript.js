var parolauno= prompt("inserisci parola");
var paroladue= prompt("inserisci secodna parola");

if(parolauno.length > paroladue.length){
    document.getElementById("corta").innerHTML= paroladue;
    document.getElementById("lunga").innerHTML= parolauno;
}else if(paroladue.length>parolauno.length){
    document.getElementById("corta").innerHTML= parolauno;
    document.getElementById("lunga").innerHTML= paroladue;
}
else{
    document.getElementById("corta").innerHTML=parolauno +" " +paroladue + " sono della stessa lunghezza"
}