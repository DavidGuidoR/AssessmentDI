'use strict';

const { INTEGER, STRING, DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('books', {
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
  },

  async down(queryInterface) {
    await queryInterface.dropTable('books');
  },
};
