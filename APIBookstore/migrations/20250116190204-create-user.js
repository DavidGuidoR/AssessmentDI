'use strict';
import { INTEGER, STRING, DATE } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
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
  await queryInterface.dropTable('Users');
};
