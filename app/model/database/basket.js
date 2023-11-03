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
        tableName: 'basket',
        sequelize,
        timestamps: false, 
        underscored: false, 
        modelName: 'Basket',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}


module.exports = Basket;

