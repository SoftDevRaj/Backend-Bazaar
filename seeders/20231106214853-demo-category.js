'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Books',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ...add as many categories as you like
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
