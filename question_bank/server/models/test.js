'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Test.init({
    Id_Test: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Id_teacher: DataTypes.STRING,
    Time: DataTypes.DATE,
    Note: DataTypes.STRING,
    Password: DataTypes.STRING,
    Date_create: DataTypes.DATE,
    Date_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Test',
  });

  return Test;
};