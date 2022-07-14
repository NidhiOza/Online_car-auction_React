const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "car_list",
  port: 3306,
});

db.connect((err) => {
  if (!err) console.log("Database is geconnect!");
  else
    console.log(
      "Database connectie niet gelukt!  : " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = db;
