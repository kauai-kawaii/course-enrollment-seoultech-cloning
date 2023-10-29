const {DataTypes, Sequelize} = require('sequelize');

class Basket extends Sequelize.Model {
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
          priority_selection: {
            type: DataTypes.STRING(45),
            collate: 'utf8mb4_unicode_ci',
          },
      },
      {
        tableName: 'basket', // 실제 데이터베이스의 테이블 이름
        sequelize,
        timestamps: false, // timestamps 관련 설정은 필요에 따라 추가
        underscored: false, // underscored 관련 설정은 필요에 따라 추가
        modelName: 'Basket', // 모델 이름
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}


module.exports = Basket;

