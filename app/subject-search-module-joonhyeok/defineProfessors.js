// Import Sequelize and define the connection to the MySQL database
var dbJson = require("../../config/config.json");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbJson.dbName, dbJson.id, dbJson.password, {
  host: dbJson.host,
  dialect: "mysql",
});

// Define the model
const professorInformation = sequelize.define("professor_information", {
  professor_id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  professor_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  professor_room: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  professor_lab_phone: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
  professor_email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  professor_page: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// Sync the model with the database
ProfessorInformation.sync()
  .then(() => {
    console.log("Professor model synced with database");
  })
  .catch((err) => {
    console.error("Error syncing Professor model with database:", err);
  });

// Export the model
module.exports = ProfessorInforamtionModel;
