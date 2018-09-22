#CRUD

CRUD is:
C = Create --> INSERT
R = Read --> SELECT
U = Update --> UPDATE
D = Delete --> DELETE


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'db'
});

