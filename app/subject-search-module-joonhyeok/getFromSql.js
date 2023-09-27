var mysql = require("mysql2");
var dbJson = require("/home/treeplanter/kauai-kawaii/a/course-enrollment-seoultech-cloning/config/config.json");

var connection = mysql.createConnection({
  host: dbJson.host,
  user: dbJson.id, //
  password: dbJson.password, //
  database: "subject-information",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected");
});
module.exports = connection;
