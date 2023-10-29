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
        tableName: 'major_information', 
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'MajorInformation', 
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
    
  }
}


module.exports = MajorInformation;
