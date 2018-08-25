const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'playlist_DB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Your connected as id ' + connection.threadId);

  connection.query('CREATE DATABASE playlist_DB;', function(err, res) {
    if (err) throw err;
    console.log(`DB Created`);

    let sql =
      'CREATE TABLE playlist (id INT NOT NULL AUTO_INCREMENT, artist VARCHAR(45) NULL, song VARCHAR (45) NULL, genre VARCHAR (45) NULL, PRIMARY KEY (id));';

    connection.query(sql, function(err, res) {
      if (err) throw err;
      console.log(`Table Created`);
    });
    // insertSong();
    // updateQuery();
    // afterConnection();
    connection.end();
  });
});

// //insert with an object
// function insertSong() {
//   connection.query(
//     'INSERT INTO playlist SET ?',
//     {
//       artist: 'Backstreet Boys',
//       song: 'I want it that way',
//       genre: 'Pop'
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res);
//     }
//   );
// }

// //how to dynmanically update the db table - use an array with two objects
// function updateQuery() {
//   connection.query(
//     'UPDATE playlist SET ? WHERE ?',
//     [
//       {
//         flavor: 'cookies and cream'
//       },
//       {
//         id: 1
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res);
//     }
//   );
// }

// function afterConnection() {
//   connection.query('SELECT * FROM playlist', function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// };
