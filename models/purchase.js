'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn('NOW')
    },
    purchase_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // associate itemId to id column in items table
        Purchase.belongsTo(models.Item, {foreignKey: 'itemId'});
      }
    }
  });
  return Purchase;
};
