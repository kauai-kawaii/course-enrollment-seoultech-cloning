// 강의별 시간
// 강의계획서
const {DataTypes, Sequelize} = require('sequelize');

class LectureTime extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        subject_code: {
            type: DataTypes.STRING(8),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_number: {
            type: DataTypes.STRING(8),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_year: {
            type: DataTypes.STRING(8),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_semester: {
            type: DataTypes.STRING(8),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_day: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7'),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_time: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
        },
        {
          tableName: 'lecture_time',
          sequelize,
          timestamps: false,
          underscored: false,
          modelName: 'LectureTime',
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
        }
    );
  }
}


module.exports = LectureTime;

