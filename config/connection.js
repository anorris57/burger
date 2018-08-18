// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "R00tang#57",
  database: "burgers_db"
});
};


// Export connection for our ORM to use.
module.exports = connection;
