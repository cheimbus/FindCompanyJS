'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [{
     created_at: new Date(),
     updated_at: new Date(),
     }], {})

    await queryInterface.bulkInsert('user', [{
     created_at: new Date(),
     updated_at: new Date(),
     }], {})

    await queryInterface.bulkInsert('user', [{
     created_at: new Date(),
     updated_at: new Date(),
     }], {})
     
    await queryInterface.bulkInsert('user', [{
     created_at: new Date(),
     updated_at: new Date(),
     }], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('user', null, {});
  }
};
