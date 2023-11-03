const { DataTypes, Sequelize } = require('sequelize');

class ProfessorInformation extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        professor_id: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        professor_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        professor_room: {
          type: DataTypes.STRING(25),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
        professor_lab_phone: {
          type: DataTypes.STRING(15),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
        professor_email: {
          type: DataTypes.STRING(45),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
        professor_page: {
          type: DataTypes.STRING(100),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
      },
      {
        tableName: 'professor_information',
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'ProfessorInformation',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}



module.exports = ProfessorInformation;