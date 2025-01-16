'use strict';
import { INTEGER, STRING, DATE } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface) => {
  await queryInterface.createTable('Books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    title: {
      type: STRING,
      allowNull: false, 
    },
    author: {
      type: STRING,
      allowNull: false,
    },
    isbn: {
      type: STRING,
      unique: true,
    },
    release_date: {
      type: DATE,
      allowNull: false,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    createdAt: {
      allowNull: false,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
    },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Books');
};
