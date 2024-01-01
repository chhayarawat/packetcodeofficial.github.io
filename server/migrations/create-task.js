'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Tasks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        taskname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        discription: {
            allowNull: false,
            type: Sequelize.STRING
        },
        state: {
            allowNull: false,
            type: Sequelize.STRING
        },
        listid: {
          allowNull: false,
          type: Sequelize.INTEGER
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
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Tasks');
    }
  };

