const {DataTypes, Sequelize} = require('sequelize');

// 개인 수강 강의 목록
class IndividualLecture extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        subject_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          subject_number: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          subject_year: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          subject_semester: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          student_number: {
            type: DataTypes.STRING(8),
            allowNull: false,
          },
          student_score: {
            type: DataTypes.ENUM('A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'),
            allowNull: true,
          },
          luck_river_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
      },
      {
        tableName: 'individual_lecture',
        sequelize,
        timestamps: false, 
        underscored: false, 
        modelName: 'IndivisualLecture',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}

module.exports = IndividualLecture;
