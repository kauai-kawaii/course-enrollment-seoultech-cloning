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
        tableName: 'individual_lecture', // 실제 데이터베이스의 테이블 이름
        sequelize,
        timestamps: false, // timestamps 관련 설정은 필요에 따라 추가
        underscored: false, // underscored 관련 설정은 필요에 따라 추가
        modelName: 'individual_lecture', // 모델 이름
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}

module.exports = IndividualLecture;
