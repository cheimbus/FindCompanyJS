'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post', [{
      id : 1,
      employer_id : 27897,
      company_id : 1,
      name : "투모로우스페이스",
      country : "한국",
      position : "백엔드",
      tech : "nodejs",
      message : "좋은사람 구합니다",
      detail : 11111,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 2,
      employer_id : 29065,
      company_id : 2,
      name : "코이랩스",
      country : "한국",
      position : "프론트엔드",
      tech : "spring",
      message : "좋은사람 구합니다!",
      detail : 11114,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 3,
      employer_id : 8742,
      company_id : 3,
      name : "커먼컴퓨터",
      country : "북한",
      position : "프론트엔드",
      tech : "spring",
      message : "좋은사람 구합니다",
      detail : 11115,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 4,
      employer_id : 24775,
      company_id : 4,
      name : "지엔에이컴퍼니",
      country : "프랑스",
      position : "데브옵스",
      tech : "java",
      message : "좋은사람 구합니다",
      detail : 11117,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
    
    await queryInterface.bulkInsert('post', [{
      id : 5,
      employer_id : 16017,
      company_id : 5,
      name : "페이히어",
      country : "한국",
      position : "백엔드",
      tech : "python",
      message : "좋은사람 구합니다",
      detail : 11119,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
      
    await queryInterface.bulkInsert('post', [{
      id : 6,
      employer_id : 12699,
      company_id : 6,
      name : "씨디에프브로스",
      country : "한국",
      position : "백엔드",
      tech : "nodejs",
      message : "좋은사람 구합니다",
      detail : 11121,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
    
    await queryInterface.bulkInsert('post', [{
      id : 7,
      employer_id : 20374,
      company_id : 7,
      name : "게임듀오",
      country : "한국",
      position : "백엔드",
      tech : "python",
      message : "좋은사람 구합니다",
      detail : 11123,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 8,
      employer_id : 26941,
      company_id : 8,
      name : "아하랩스",
      country : "한국",
      position : "프론트엔드",
      tech : "java",
      message : "좋은사람 구합니다",
      detail : 11125,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 9,
      employer_id : 27308,
      company_id : 9,
      name : "블루타이거",
      country : "미국",
      position : "백엔드",
      tech : "spring",
      message : "좋은사람 구합니다",
      detail : 11127,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})

    await queryInterface.bulkInsert('post', [{
      id : 10,
      employer_id : 11023,
      company_id : 10,
      name : "누비랩",
      country : "영국",
      position : "안드로이드",
      tech : "react",
      message : "좋은사람 구합니다",
      detail : 1112,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('post', null, {});
  }
};