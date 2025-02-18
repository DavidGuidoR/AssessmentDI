'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  }

  Book.init({
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'release_date',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  });

  return Book;
};
