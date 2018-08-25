const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'password',
  database: 'ice_creamDB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  insertIcecream();
  updateQuery();
  afterConnection();
  connection.end();
});

//insert with an object
function insertIcecream() {
  connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: 'Orange',
      price: 4,
      quantity: 1000
    },
    function(err, res) {
      if (err) throw err;
      console.log(res);
      // connection.end();
    }
  );
}

//hard coded insert
// function insertIcecream() {
//   connection.query(
//     "INSERT INTO products (flavor, price, quantity) VALUES ('moosetracks', 2, 100)",
//     function(err, res) {
//       if (err) throw err;
//       console.log(res);
//     }
//   );
// }

//how to dynmanically update the db table - use an array with two objects
function updateQuery() {
  connection.query(
    'UPDATE products SET ? WHERE ?',
    [
      {
        flavor: 'cookies and cream'
      },
      {
        id: 1
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
}

function afterConnection() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}
