'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Teacher.init({
    Id_teacher: {
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey: true

    },
    Name: DataTypes.STRING,
    Dob: DataTypes.DATE,
    Gender: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};