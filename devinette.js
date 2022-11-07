let input = document.getElementById('choix.value')

let resultat = Math.floor(Math.random() * 11);

 function Devine(){

    if ( input.value < resultat) {
        console.log("votre choix etait plus petit");
    }

    else if (input.value > resultat){
        console.log("Votre choix etait plus grand");
    }

    else 
    {
     alert('bravo vous avez trouver la bonne reponse', resultat) ;  
    }
}