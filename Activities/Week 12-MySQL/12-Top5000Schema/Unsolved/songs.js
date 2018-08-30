const sql = require('mysql');
const inquirer = require('inquirer');

const connection = sql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'top_songsDB'
});

connection.connect(err => {
  if (!err) {
    console.log(`You are connected`);
    runSearch();
    // searchArtist();
    // searchSong();
  }
});

function runSearch() {
  inquirer
    .prompt([
      {
        name: 'What would you like to do?',
        type: 'list',
        choices: [
          'What Artist would you like to search the database for?',
          'What song would you like to search the database for?'
        ]
      }
    ])
    .then(answers => {
      let artistName = answers.name;
      connection.query(
        'SELECT * FROM Top1000 WHERE artist=?',
        [artistName],
        function(err, res) {
          if (err) throw err;
          console.log(res);
          connection.end();
        }
      );
    });
}

function searchArtist() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What Artist would you like to search the database for?'
      }
    ])
    .then(answers => {
      let artistName = answers.name;
      connection.query(
        'SELECT * FROM Top1000 WHERE artist=?',
        [artistName],
        function(err, res) {
          if (err) throw err;
          console.log(res);
          connection.end();
        }
      );
    });
}

function searchSong() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What song would you like to search the database for?'
      }
    ])
    .then(answers => {
      let songName = answers.name;
      connection.query(
        'SELECT * FROM Top1000 WHERE song=?',
        [songName],
        function(err, res) {
          if (err) throw err;
          console.log(res);
          connection.end();
        }
      );
    });
}

function lisTop1000() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What Artist would you like to search the database for?'
      }
    ])
    .then(answers => {
      let artistName = answers.name;
      connection.query(
        'SELECT * FROM Top1000 WHERE artist=?',
        ['Adele'],
        function(err, res) {
          if (err) throw err;
          console.log(res);
        }
      );
    });
}

function readTable() {
  connection.query(`SELECT * FROM Top1000`, function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res);
  });
}
