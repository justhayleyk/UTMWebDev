const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'musicPlaylist1_DB'
});

// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query('CREATE DATABASE musicPlaylist5_DB', function(err, res) {
//     if (err) throw err;
//     console.log(`DB Created`);

//     let sql =
//       'CREATE TABLE playlist (id INTEGER AUTO_INCREMENT NOT NULL, artist VARCHAR(250), song VARCHAR (250), genre VARCHAR (250), PRIMARY KEY (id))';
//     connection.query(sql, function(err, res) {
//       if (err) throw err;
//       console.log(`Table Created`);
//     });
//   });

//   console.log('connected!');
//   // createMusic();
//   // deleteMusic();
//   // readMusic();
//   // connection.end();
// });

connection.connect(function(err) {
  if (err) throw err;

  connection.query('CREATE DATABASE musicPlaylist9_DB', function(err, res) {
    if (err) throw err;
    console.log(`DB Created`);

    console.log('connected to id' + connection.threadId);
    // createMusic();
  });

  var sql =
    'CREATE TABLE playlist (id INT NOT NULL AUTO_INCREMENT, artist VARCHAR(250), song VARCHAR(250), genre VARCHAR(250), PRIMARY KEY (id))';

  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table created');
  });
});

function createMusic() {
  console.log(`Creating a new row of music`);

  connection.query(
    'INSERT INTO music (artis, song, genre) VALUES ?',
    [
      [
        ['backstreet boys', 'I want it that way', 'pop'],
        ['taylor swift', 'shake it off', 'pop']
      ]
    ],
    function(err, res) {
      if (err) throw err;
      console.log('Worked', res);
    }
  );
}

function readMusic() {
  connection.query('SELECT * FROM music', function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

function updateMusic() {
  connection.query(
    'UPDATE music SET ? WHERE ?',
    [
      {
        genre: 'Pop'
      },
      {
        id: 2
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
}

function deleteMusic() {
  connection.query('DELETE FROM music WHERE id=?', [2], function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}
