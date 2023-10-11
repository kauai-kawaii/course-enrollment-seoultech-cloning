// Import Sequelize and define the connection to the MySQL database
var dbJson = require("../../config/config.json");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbJson.dbName, dbJson.id, dbJson.password, {
  host: dbJson.host,
  dialect: "mysql",
});

// Define the model
const SubjectInformation = sequelize.define("subject_information", {
  subject_code: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  subject_number: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  subject_year: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  subject_semester: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    unique: false,
  },
  subject_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  professor_id: {
    type: Sequelize.STRING(10),
    references: {
      model: "professor_information",
      key: "professor_id",
    },
  },
  created_college: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  governed_college: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  lecture_type: {
    type: Sequelize.ENUM,
    values: ["교선", "교필", "전선", "전필", "일선", "기필"],
    allowNull: true,
  },
  lecture_credit: {
    type: Sequelize.ENUM,
    values: ["1", "2", "3"],
    allowNull: false,
  },
  lecture_maximum_personnel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lecture_applied_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lecture_exclusive: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lecture_building: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  lecture_room_number: {
    type: Sequelize.STRING(6),
    allowNull: false,
  },
  others: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  lecture_bound: {
    type: Sequelize.ENUM,
    values: ["1영역", "2영역", "3영역"],
    allowNull: true,
  },
  special_course: {
    type: Sequelize.ENUM,
    values: ["교직", "논문세미나"],
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
