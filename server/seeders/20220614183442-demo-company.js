'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company', [{
     name: '투모로우스페이스',
     created_at: new Date(),
     updated_at: new Date(),
     }], {}),

    await queryInterface.bulkInsert('company', [{
      name: '코이랩스',
      created_at: new Date(),
      updated_at: new Date(),
      }], {}),

    await queryInterface.bulkInsert('company', [{
      name: '커먼컴퓨터',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})

    await queryInterface.bulkInsert('company', [{
      name: '지엔에이컴퍼니',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})

    await queryInterface.bulkInsert('company', [{
      name: '페이히어',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})

    await queryInterface.bulkInsert('company', [{
      name: '씨디에프브로스',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})
    await queryInterface.bulkInsert('company', [{
      name: '게임듀오',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})

    await queryInterface.bulkInsert('company', [{
      name: '아하랩스',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})
      
    await queryInterface.bulkInsert('company', [{
      name: '블루타이거',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})

    await queryInterface.bulkInsert('company', [{
      name: '누비랩',
      created_at: new Date(),
      updated_at: new Date(),
      }], {})
      
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('company', null, {});
  }
};
