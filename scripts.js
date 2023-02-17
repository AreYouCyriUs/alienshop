console.log("Fichier script chargé!")



// VARIABLES

let panier = [];
let articlesPanier = 0;
let counter = 0;


// ARTICLES 

let canonBio = {
nom: 'Canon Bionique',
prix: '199 $'
};


let fusilLaser = {
    nom: 'Fusil Laser',
    prix: '299 $'
};

    
let pistolAto = {
    nom: 'Canon Bionique',
    prix: '99 $'
};
        



function ajoutPanier(article){
  
  // Ajouter l'article selectionné au tableau panier
  panier.push(article);
  
  //Le nombre d'article dans le panier augmente de 1
  articlesPanier++;

  //Affiche la notif dans le panier
    document.getElementById("info_panier").innerHTML = "MON PANIER" + "("+ articlesPanier +")";
    



  localStorage.setItem('Pistolet atomique', JSON.stringify(pistolAto));
    


  console.log(panier);
  console.log(localStorage);

  };







// RECUPERATION ARTICLE(S) PANIER
// ETAPE 1 - BOUCLE (LS LENGHT) + JSON PARSE

/*
localStorage.getItem('Pistolet atomique', JSON.parse(pistolAto);

*/

let recupPanier = document.getElementById('listeProduits');



/*

<div class='vignetteProduit'>
    <img src='/WEAPONS/alien_01.webp' width='50%'>
    <p id='nomProduit'></p>
    <p>Quantité</p>
</div>

*/
















  function afficher(){

    let nameVisitor = document.getElementById("reqName").value;

    console.log(nameVisitor);

    let bienvenue = document.getElementById("MessAccueil");
 
    bienvenue.innerHTML = ' Bienvenue à toi '  + nameVisitor + ' ! '
  
  }