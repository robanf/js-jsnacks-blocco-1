var dispari=[];


for(var i=0;i<6;i++){
    var temp=parseInt(prompt("inserisci numero dispari"));
    if(temp%2 != 0){
        dispari.push(temp);
    }
}

console.log(dispari);