// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ohd98dekc84bt4in',
    password: 'zkmzhmw4iuwnyyem',
    database: 'n2b140or33smkflq'
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
