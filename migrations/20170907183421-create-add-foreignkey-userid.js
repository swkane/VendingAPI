'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'MachineInfos',
      'itemId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id'
        }
      }
    )
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('MachineInfos', 'itemId');
  }
};
