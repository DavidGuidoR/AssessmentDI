'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('books', 'title', {
      type: Sequelize.STRING(500),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('books', 'title', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
