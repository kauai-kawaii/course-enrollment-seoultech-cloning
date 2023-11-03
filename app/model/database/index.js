// "use strict";

// const fs = require('fs');
// const path = require('path');
// const basename = path.basename(__filename);

// const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';

// const config = require('../../config/config.json')[env];

// const db = {};

// const sequelize = new Sequelize(config.database, config.username, config.password, config);
// db.sequelize = sequelize;

// fs
//   .readdirSync(__dirname) 
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); 
//   })
//   .forEach(file => {  
//     const model = require(path.join(__dirname, file)).init(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//     });

// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db)
//     }
//   })

// module.exports = db;


const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const config = require('../../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

fs
  .readdirSync(__dirname) 
  .filter(file => {
    return (file !== 'relations.js' && file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'); 
    // 위의 줄에서 'relations.js' 파일을 추가하고 나머지 파일은 그대로 유지합니다.
  })
  .forEach(file => {  
    const model = require(path.join(__dirname, file)).init(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })

module.exports = db;
