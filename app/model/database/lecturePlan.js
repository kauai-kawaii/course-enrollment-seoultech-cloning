// 강의계획서
const {DataTypes, Sequelize} = require('sequelize');

class LecturePlan extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
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
          professor_id: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_ko: {
            type: DataTypes.STRING(20),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_eng: {
            type: DataTypes.STRING(45),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
        },
        {
          tableName: 'lecture_plan',
          sequelize,
          timestamps: false,
          underscored: false,
          modelName: 'LecturePlan',
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
        }
    );
  }
}


module.exports = LecturePlan;

