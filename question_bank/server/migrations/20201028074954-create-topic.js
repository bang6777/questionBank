'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Topics', {
      Id_topic:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Name_topic: {
        type: Sequelize.STRING
      },
      Content_topic: {
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
    await queryInterface.dropTable('Topics');
  }
};