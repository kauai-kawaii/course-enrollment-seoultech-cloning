const {DataTypes, Sequelize} = require('sequelize');

class SubjectInformation extends Sequelize.Model {
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
            collate: 'utf8mb4_unicode_ci',
          },
          subject_year: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_semester: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          subject_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          professor_id: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          created_college: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          governed_college: {
            type: DataTypes.STRING(10),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_credit: {
            type: DataTypes.ENUM('1', '2', '3'),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_type: {
            type: DataTypes.ENUM('교선','교필','전선','전필','일선','기필'), 
            allowNull: true,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_max_personnel: {
            type: DataTypes.TINYINT,
            allowNull: true,
          },
          lecture_applied_number: {
            type: DataTypes.TINYINT,
            allowNull: true,
          },
          lecture_exclusive: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
          },
          university_exclusive: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
          },
          lecture_building: {
            type: DataTypes.STRING(30),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_room_number: {
            type: DataTypes.STRING(6),
            allowNull: false,
            collate: 'utf8mb4_unicode_ci',
          },
          others: {
            type: DataTypes.TEXT,
            collate: 'utf8mb4_unicode_ci',
          },
          lecture_bound: {
            type: DataTypes.ENUM('1영역', '2영역', '3영역'), 
            allowNull: true,
            collate: 'utf8mb4_unicode_ci',
          },
          special_course: {
            type: DataTypes.STRING, 
            allowNull: true,
            collate: 'utf8mb4_unicode_ci',
          },
          dad_of_revenge: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
          },
      },
      {
        tableName: 'subject_information', 
        sequelize,
        timestamps: false, 
        underscored: false, 
        modelName: 'subject_information', 
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}


// 외래 키 설정
// SubjectInformation.belongsTo(Professor, {
//     foreignKey: 'professor_id',
//     targetKey: 'professor_id',
//     as: 'professor', // 별칭 정의
//   });

module.exports = SubjectInformation;
