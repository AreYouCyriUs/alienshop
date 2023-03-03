console.log("Fichier script chargé!")

//////////////////////////////////// VARIABLES

let panier = [];
let articlesPanier = 0;
let counter = 0;

//////////////////////////////////// ARTICLES 

let canonBio = {
nom: 'Canon Bionique',
prix: '199 $',
image: '/WEAPONS/alien_01.webp',
quantity: 0
};


let fusilLaser = {
    nom: 'Fusil Laser',
    prix: '299 $',
    image: '/WEAPONS/alien_02.webp',
    quantity: 0
};

    
let pistolAto = {
    nom: 'Pistolet Atomique',
    prix: '99 $',
    image: '/WEAPONS/alien_03.webp',
    quantity: 0
};





let articlesList = [

{
  nom: 'Canon Bionique',
  prix: '199 $',
  image: '/WEAPONS/alien_01.webp',
  quantity: 0
},
    
{
  nom: 'Fusil Laser',
  prix: '299 $',
  image: '/WEAPONS/alien_02.webp',
  quantity: 0
},
            
{
   nom: 'Pistolet Atomique',
   prix: '99 $',
   image: '/WEAPONS/alien_03.webp',
   quantity: 0
}
]




 //////////////////////////////////// AJOUT PANIER

function addBasket(basket){
localStorage.setItem(basket.nom, JSON.stringify(basket));
}


function ajoutPanier(article){

if (article == "canon bionique"){
  canonBio.quantity++
  addBasket(canonBio);

}
else if (article == "fusil laser"){
  fusilLaser.quantity++
  addBasket(fusilLaser);
}
else if (article == "pistolet atomique"){
  pistolAto.quantity++
  addBasket(pistolAto);
}
else {
  addBasket(null);
}

  
panier.push(article);
articlesPanier++;

// NOTIF PANIER 
document.getElementById("info_panier").innerHTML = "MON PANIER" + "("+ articlesPanier +")";

console.log(localStorage);


  };



