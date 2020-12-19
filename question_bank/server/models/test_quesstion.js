'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test_Quesstion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Test_Quesstion.init({
    Id_tq: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Id_quessiton: DataTypes.STRING,
    Id_test: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test_Quesstion',
  });
  return Test_Quesstion;
};