const {DataTypes, Sequelize} = require('sequelize');

class MajorInformation extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        major_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
          },
          major_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
          },
        
      },
      {
        tableName: 'major_information', // 실제 데이터베이스의 테이블 이름
        sequelize,
        timestamps: false, // timestamps 관련 설정은 필요에 따라 추가
        underscored: false, // underscored 관련 설정은 필요에 따라 추가
        modelName: 'major_information', // 모델 이름
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
    
  }
}

// Major
//   .sync()
//   .then(() => {
//     console.log("Student Idendities model synced with database");
//   })
//   .catch((err) => {
//     console.error("Error syncing Student Identities model with database:", err);
//   });


module.exports = MajorInformation;
