
// RECUP PANIER

recupPanier = JSON.parse(localStorage.getItem("Canon Bionique"));

//BOUCLE SUR LE PANIER ?






    


let divParent = document.getElementById('listeProduits')



    
    for (let i = 0; i < localStorage.length; i++){

          
let divChild = document.createElement("div");

divChild.innerHTML = "<div class='vignetteProduit'><p>"+ recupPanier.nom +" x"+ null +"</p><img src=" + canonBio.image + " width='50%'></div'>"

divParent.appendChild(divChild);


     // displayProduct(pistolAto);
      
    };
    