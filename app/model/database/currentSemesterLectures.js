// 해당학기수강신청과목
const {DataTypes, Sequelize} = require('sequelize');

class CurrentSemesterLectures extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        student_number: {
          type: DataTypes.STRING(8),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        subject_code: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        subject_number: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        subject_year: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        subject_semester: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
      },
      {
        tableName: 'current_semester_lectures',
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'CurrentSemesterLectures',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}


module.exports = CurrentSemesterLectures;

