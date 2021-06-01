var invitati=['franco','maurizio','carlo','francesco','roberto'];

var nome=prompt("dimmi il tuo nome");

var find=false;


for(var i=0;i<invitati.length && !find;i++){
    if(nome==invitati[i]){
        find=true;
    }
}

if(find){
    document.getElementById("invitato").innerHTML="Benvenuto alla festa";

}
else{
    document.getElementById("invitato").innerHTML="Mi dispiace non puo entrare";
}