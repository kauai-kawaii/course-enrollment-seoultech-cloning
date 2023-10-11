var dbJson = require("../../config/config.json");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  database,
  username,
  password,
  dialect: "mysql",
});

const studentIdendities = sequelize.define(
  "student_identities",
  {
    // Model attributes are defined here
    student_number: {
      // PK: Student Number
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    student_name: {
      // Student Name
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_status: {
      // Student Status:  set {재학, 휴학, 재적}
      type: DataTypes.STRING,
      defaultValue: "재학",
      allowNull: false,
    },
    student_main_major: {
      // Student Main Major
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_earned_credit: {
      // Student Earned Credit
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_class: {
      // Student Class -> 분반 1101, 2101, 3101, 4101
      type: DataTypes.ENUM,
      values: ["1101", "2101", "3101", "4101"],
      allowNull: false,
    },
    student_applied_credit: {
      // Student Applied Credit
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    student_grade_year: {
      // Student Grade Year
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_max_credit: {
      // Student Max Credit
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_major_credit: {
      // Student Major Credit
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    student_phone_number: {
      // Student Phone Number, varchar(12)
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_birthday: {
      // Student Birthday, datatype: date, format: YYYY-MM-DD
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_sub_major: {
      // Student Sub Major
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    student_main_major: {
      // Student Main Major
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    student_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// Sync the model with the database
studentIdendities
  .sync()
  .then(() => {
    console.log("Student Idendities model synced with database");
  })
  .catch((err) => {
    console.error("Error syncing Student Identities model with database:", err);
  });

// Export the model
module.exports = studentIdenditiesModel;
