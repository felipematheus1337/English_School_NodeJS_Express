'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Pessoas', [{
        nome:'JOAO', 
        ativo: true,
        email:'joao@yahoo.com',
        role:'Engenheiro de Produção',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Luke', 
        ativo: false,
        email:'luk3z@outlook.com',
        role:'Sound System Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
