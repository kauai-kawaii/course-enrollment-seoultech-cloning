const {DataTypes, Sequelize} = require('sequelize');

class StudentIdentities extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        student_number: {
          type: DataTypes.STRING(8),
          allowNull: false,
          primaryKey: true,
          collate: 'utf8mb4_unicode_ci',
        },
        student_name: {
          type: DataTypes.STRING(20),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        student_status: {
          type: DataTypes.ENUM('재학', '휴학', '재적'),
          allowNull: false,
          defaultValue: '재학',
          collate: 'utf8mb4_unicode_ci',
        },
        student_main_major: {
          type: DataTypes.STRING(10),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        student_earned_credit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        student_class: {
          type: DataTypes.ENUM('1101', '2101', '3101', '4101'),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        student_applied_credit: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        student_grade_year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        student_max_credit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        student_major_credit: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        student_phone_number: {
          type: DataTypes.STRING(12),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        student_birthday: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        student_sub_major: {
          type: DataTypes.STRING(10),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
        student_dual_major: {
          type: DataTypes.STRING(10),
          allowNull: true,
          collate: 'utf8mb4_unicode_ci',
        },
        student_password: {
          type: DataTypes.STRING(60),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
        student_email: {
          type: DataTypes.STRING(20),
          allowNull: false,
          collate: 'utf8mb4_unicode_ci',
        },
      },
      {
        tableName: 'student_identities',
        sequelize,
        timestamps: false, 
        underscored: false, 
        modelName: 'StudentIdentities',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
}

module.exports = StudentIdentities;