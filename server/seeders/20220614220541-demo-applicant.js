'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('applicant', [{
     user_id:1,
     employer_id:27897,
     is_apply:false,
     created_at: new Date(),
     updated_at: new Date(),
     }], {})
  
    await queryInterface.bulkInsert('applicant', [{
     user_id:2,
     employer_id:24775,
     is_apply:false, 
     created_at: new Date(),
     updated_at: new Date(),
     }], {})

    await queryInterface.bulkInsert('applicant', [{
     user_id:3,
     employer_id:20374,
     is_apply:false, 
     created_at: new Date(),
     updated_at: new Date(),
     }], {})
     
    await queryInterface.bulkInsert('applicant', [{
     user_id:4,
     employer_id:26941,
     is_apply:false, 
     created_at: new Date(),
     updated_at: new Date(),
     }], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('applicant', null, {});
  }
};
