
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/utilisateur so you can see the data.');
});

// test(){
//     fetch('http://yourPCip:3000/users')
//       .then(response => response.json())
//       .then(users => console.warn(users))
//   }


//test