const sql = require('mysql');

const connection = sql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'test_db'
});

connection.connect(err => {
  if (!err) {
    console.log(`You are connected`);
    insertTable();
    readTable();
    connection.end();
  }
  console.log(`There is an ${err}`);
});

function insertTable() {
  connection.query(
    `INSERT INTO quiz SET ?`,
    {
      name: 'jane',
      SQLRating: 5
    },
    function(err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
}

function readTable() {
  connection.query(`SELECT * FROM quiz`, function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res);
  });
}
