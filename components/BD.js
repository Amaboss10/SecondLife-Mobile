
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const [data, setData] = useState(false);


const connection = mysql.createPool({
  host     : '185.224.138.153',
  user     : 'u404269894_uSL',
  password : 'LXYYfJ!o2',
  database : 'u404269894_SL'
});

// We're still in routes.js! Right below everything else.

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/utilisateur', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM utilisateur', function (error, results, fields) {
     
    // If some error occurs, we throw an error.
      if (error) throw error;
    // Getting the 'response' from the database and sending it to our route. This is were the data is.    
      res.send(results);
    
    });
  });
});

app.get('/annonce', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM annonce', function (error, results, fields) {
   
    if (error) throw error;
    res.send(results);
  
  });
});
});

app.get('/photo_annonce', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM photo_annonce', function (error, results, fields) {
   
    if (error) throw error;
    res.send(results);
  
  });
});
});


app.get('/personne', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM personne', function (error, results, fields) {
   
    if (error) throw error;
    res.send(results);
  
  });
});
});


app.get('/faq', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM faq', function (error, results, fields) {
   
    if (error) throw error;
    res.send(results);
  
  });
});
});

// app.post('/createU', function (req, res) {
//   var newUser = JSON.parse(req.body.data)
//   books.push(newUser)
//   console.log(books);
//   if (error) throw error;
// })
// app.post('/create', function (req, res) {
//   var newUser = {
//     "nom_personne":req.body.nom_personne,
//     "prenom_personne":req.body.prenom_personne,
//     "mail_personne":req.body.mail_personne,
//     "mdp_personne":req.body.mdp_personne,
//     "lien_image_personne":req.body.lien_image_personne,
//     "type":req.body.type
    
//   }

//   personne.push(newUser)
//   console.log(newUser);

//  res.status(201).json({"some":"response"})


// })

app.get('/favoris', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM favoris', function (error, results, fields) {
   
  // If some error occurs, we throw an error.
    if (error) throw error;
  // Getting the 'response' from the database and sending it to our route. This is were the data is.    
    res.send(results);
  
  });
});
});
// Starting our server.
app.listen(3000, () => {
 
  console.log('Go to http://localhost:3000/utilisateur so you can see the data.');
});




// inserer user 
// modifier compte 
// verifier authentif
// supp user


// inserer annonce
// select 
// delete
// update

// insert favoris
// delete

//