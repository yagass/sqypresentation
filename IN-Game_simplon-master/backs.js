var games =[
    {
     
     name:"death stranding",
     tags:" ",
     url: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44iZvVR0Jq9uaLMBkn1_YP0TBtxBhjFoX1JkMbTX8rwGyjcLOiw  ",
    
      like:false
    },




    {
    
    name:"bordelands3",
    tags:" ",
     url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPES3i_3xZCRT8Vt6_8KhvCsn1Fwz6SWHTjls9xKeiv5H3qRX  ",
    like:true
    },


   { 
   
   name:"rage2",
   tags:" ",
   url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS54cVRkcn6bcUTJAzWZs3nflr7Km35nwwI9C-mitd8w5V9xE3 ",
    like:true


},
 
 ];



// foreach pour parcourrir trous les elmts // love= contenaire
 var love = document.getElementById('love');
 games.forEach(function(produit) {

    var ladivduproduit = document.getElementById(produit.name);
    //creer une div
     var elmtProduit= document.createElement('div');
     elmtProduit.setAttribute('id',produit.name);
     love.appendChild(elmtProduit);
     

    //creer une img et un prix
     elmtProduit.innerHTML=produit.name +'<img src=" '+ produit.url+' ">'+ produit.price;

    //creer un bouton
     var button = document.createElement("button");
     button.setAttribute("id","button");
     document.getElementById(produit.name).appendChild(button);
     button.innerHTML= 'buy';


     //creer un coeur et like
     var like=document.createElement("i");
     like.setAttribute("class","fas fa-heart");
     document.getElementById(produit.name).appendChild(like);
     like.onclick = function(event) {
      if (produit.like == true) {
       like.innerHTML="",
       like.setAttribute ('class','fas fa-heart red')
         produit.like = false;
      }
      else {
        like.setAttribute('class', 'fas fa-heart');
        produit.like = true
      }
      console.log(produit.like); 
   }
  });



   // fonction like 


// exemple pour la serie game of trone 

//  $.get("https://swapi.co/api/people", function (data){    
//           data.results.forEach(function (personnage){   
//           console.log(personnage.name);               
//           const element=document.createElement("div")        
//                         element.innerHTML=personnage.name                     
//                                const ct= document.getElementById("container")                                          
//               ct.appendChild(element); 
//                })
//         })

// titre exemplaire

// recupere hello world dans mon dossier 
$.get('http://localhost:3000/', function (response, error){

console.log(response);
});