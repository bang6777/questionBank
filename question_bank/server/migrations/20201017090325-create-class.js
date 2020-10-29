'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Classes', {
      Id_Class: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Id_Grade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Classes');
  }
};