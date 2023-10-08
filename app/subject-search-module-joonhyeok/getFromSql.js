var mysql = require("mysql2");
var dbJson = require("/home/treeplanter/kauai-kawaii/a/course-enrollment-seoultech-cloning/config/config.json");

const { Sequelize } = require("sequelize");

// Passing parameters separately (other dialects)
const sequelize = new Sequelize(dbJson.dbName, dbJson.id, dbJson.password, {
  host: dbJson.host,
  dialect: "mysql", // Choose a DB engine
}); // Get data from json file of config information

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Database connected");
// });
module.exports = connection;
