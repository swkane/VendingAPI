'use strict';
module.exports = function(sequelize, DataTypes) {
  var MachineInfo = sequelize.define('MachineInfo', {
    prev_total: DataTypes.INTEGER,
    current_total: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // associate itemId to id column in items table
        MachineInfo.belongsTo(models.Item, {foreignKey: 'itemId'});
      }
    }
  });
  return MachineInfo;
};
