'use strict';
import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import userModel from './user.js';
import bookModel from './book.js';

const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
    logging: false
  }
);

const db = {};

db.User = userModel(sequelize, Sequelize.DataTypes);
db.Book = bookModel(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
