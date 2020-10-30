'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position_Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Position_Teacher.init({
    Id_pt: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Id_position: DataTypes.STRING,
    Id_teacher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Position_Teacher',
  });
  return Position_Teacher;
};