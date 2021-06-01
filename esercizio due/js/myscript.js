var mynumeri=[];
var somma=0;
/* for(var i=0;i<5;i++){
    mynumeri.push(parseInt(prompt("inserisci numero")));
    somma+=mynumeri[i];
    console.log(mynumeri[i]);
    if(mynumeri[i]%2 == 0){
        document.getElementById("pari").innerHTML += mynumeri[i] + " ";
    }
} */
var i=0;
while(i<5){
    mynumeri.push(parseInt(prompt("inserisci numero")));
    somma+=mynumeri[i];
    console.log(mynumeri[i]);
    if(mynumeri[i]%2 == 0){
        document.getElementById("pari").innerHTML += mynumeri[i] + " ";
    }
    i++;
}

document.getElementById("mysomma").innerHTML+=somma;