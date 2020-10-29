'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quesstion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quesstion.init({
    Id_quesstion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true

    },
    Id_teacher: DataTypes.STRING,
    Id_level: DataTypes.STRING,
    title: DataTypes.STRING,
    Date_create: DataTypes.DATE,
    Date_update: DataTypes.DATE,
    Name_quesstion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quesstion',
  });
  return Quesstion;
};