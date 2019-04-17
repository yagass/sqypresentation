// je vais chercher le driver sqlite3 dans node_modules 
const sqlite3 = require('sqlite3').verbose(); 
const express = require ('express');
const fs = require('fs'); 
const app = express ();

const dbFile = 'test.db'; 
const db = new sqlite3.Database(dbFile); 


// la partie   permet de faire sqlite 3 au niveau du database
// sans db.serialize. 
// les operations sont lancées en même temps. 
// le INSERT risque d'etre executé. 
// avant que la creation de la table soit finie. 
db.serialize( () => { 

 //  if ( !fs.existsSync(dbFile) ) { 
   // on a cree un tableau types


   
  // db.run ('CREATE TABLE types (types_id INTEGER PRIMARY KEY AUTOINCREMENT, tyes_name TEXT UNIQUE)');
  // db.run('INSERT INTO types (types_name) VALUES (?)', 'ps4');
   //db.run('INSERT INTO types (types_name ) VALUES (?)', 'xbox');
  // db.run('INSERT INTO types (types_name) VALUES (?)', 'switch');
  


   // on a cree un tableau de screenshot pour nos 3 jeux 
    //les jeux sont les suivants
   db.run('CREATE TABLE screenshot (screenshot_id INTEGER PRIMARY KEY AUTOINCREMENT,screenshot_name TEXT UNIQUE, photo TEXT, like BOOLEAN,  description TEXT, tags TEXT)');
    db.run('INSERT INTO products (products_name,photo,like,description,tags) VALUES (?, ?, ?, ?, ?)', 'death stranding','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44iZvVR0Jq9uaLMBkn1_YP0TBtxBhjFoX1JkMbTX8rwGyjcLOiw ',false,description,tags);
      db.run('INSERT INTO products (products_name,photo,like,description,tags) VALUES (?, ?, ?, ?, ?)', 'rage2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS54cVRkcn6bcUTJAzWZs3nflr7Km35nwwI9C-mitd8w5V9xE3',true,description,tags);  
       db.run('INSERT INTO products (products_name,photo,like,description,tags) VALUES (?, ?, ?, ?, ?)', 'borderlands3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPES3i_3xZCRT8Vt6_8KhvCsn1Fwz6SWHTjls9xKeiv5H3qRX ',true,description,tags);  






      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS54cVRkcn6bcUTJAzWZs3nflr7Km35nwwI9C-mitd8w5V9xE3
  // on a creer un tableaude profil

     // db.run ('CREATE TABLE links(profil_id INTEGER PRIMARY KEY AUTOINCREMENT, like_name TEXT UNIQUE)');
     // db.run('INSERT INTO links (profil_name) VALUES (?)', 'A');
     // db.run('INSERT INTO links (profil_name) VALUES (?)', 'B');
     // db.run('INSERT INTO links (profil _name) VALUES (?)', 'C');
      
       







  db.all('SELECT * FROM products NATURAL JOIN links NATURAL JOIN types', function (error, data) { 
    if (!error) console.log(data); 
     else console.log(error); 
  }); 
})

app.get ('/', function (request,response) {
 db.all('SELECT * FROM types NATURAL JOIN products NATURAL JOIN link', function (error,data){
   response.send(data);
 })
});
//app.listen(3000,function(error){
 // if (!error) console.log ( 'app listening port 3000');
//})